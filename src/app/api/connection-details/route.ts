import { createApolloClient } from '@/lib/apollo-client';
import { randomString } from '@/lib/client-utils';
import { ConnectionDetails } from '@/lib/types';
import { gql } from '@apollo/client';
import { auth } from '@clerk/nextjs/server';
import {
  AccessToken,
  AccessTokenOptions,
  VideoGrant,
} from 'livekit-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL;

type Me = {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
};

const GET_INFO = gql`
  query Me {
    me {
      id
      email
      name
      avatarUrl
    }
  }
`;

export async function GET(request: NextRequest) {
  try {
    // Handle missing roomId
    const roomId = request.nextUrl.searchParams.get('roomId');
    if (typeof roomId !== 'string') {
      return new NextResponse('Missing required query parameter: roomId', {
        status: 400,
      });
    }

    // Get user data
    const sessionId = auth().sessionId;
    if (!sessionId) {
      return new NextResponse('Missing required user in server: sessionId', {
        status: 400,
      });
    }
    const apolloClient = createApolloClient(sessionId);
    const { data: userData } = await apolloClient.query<{
      me: Me;
    }>({
      query: GET_INFO,
    });

    // Generate participant token
    const participantToken = await createParticipantToken(
      {
        identity: `${userData?.me.id}__${randomString(10)}`,
        name: userData?.me.name,
        metadata: JSON.stringify({ avatarUrl: userData?.me.avatarUrl }),
      },
      roomId
    );

    // Return connection details
    const data: ConnectionDetails = {
      serverUrl: LIVEKIT_URL as string,
      roomName: roomId,
      participantToken: participantToken,
      participantName: userData?.me.name,
    };

    // Return connection details
    return NextResponse.json(data);
  } catch (error) {
    // Handle return error
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
  }
}

function createParticipantToken(userInfo: AccessTokenOptions, roomId: string) {
  const at = new AccessToken(API_KEY, API_SECRET, userInfo);
  at.ttl = '5m';
  const grant: VideoGrant = {
    room: roomId,
    roomJoin: true,
  };
  at.addGrant(grant);
  return at.toJwt();
}
