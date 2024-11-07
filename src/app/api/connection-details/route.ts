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

const GET_AVATAR_URL = gql`
  query AvatarUrl {
    me {
      avatarUrl
    }
  }
`;

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const roomName = request.nextUrl.searchParams.get('roomName');
    const participantName = request.nextUrl.searchParams.get('participantName');

    const sessionId = auth().sessionId;

    if (!sessionId) {
      return new NextResponse('Missing required user in server: sessionId', {
        status: 400,
      });
    }

    const apolloClient = createApolloClient(sessionId);

    const avatarData = await apolloClient.query<{ me: { avatarUrl: string } }>({
      query: GET_AVATAR_URL,
    });

    if (typeof roomName !== 'string') {
      return new NextResponse('Missing required query parameter: roomName', {
        status: 400,
      });
    }
    if (participantName === null) {
      return new NextResponse(
        'Missing required query parameter: participantName',
        { status: 400 }
      );
    }

    // Generate participant token
    const participantToken = await createParticipantToken(
      {
        identity: `${participantName}__${randomString(4)}`,
        name: participantName,
        metadata: JSON.stringify({ avatarUrl: avatarData.data?.me.avatarUrl }),
      },
      roomName
    );

    // Return connection details
    const data: ConnectionDetails = {
      serverUrl: LIVEKIT_URL as string,
      roomName: roomName,
      participantToken: participantToken,
      participantName: participantName,
    };
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 });
    }
  }
}

function createParticipantToken(
  userInfo: AccessTokenOptions,
  roomName: string
) {
  const at = new AccessToken(API_KEY, API_SECRET, userInfo);
  at.ttl = '5m';
  const grant: VideoGrant = {
    room: roomName,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  };
  at.addGrant(grant);
  return at.toJwt();
}
