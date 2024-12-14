import { createApolloClient } from '@/lib/apollo-client';
//import { randomString } from '@/lib/client-utils';
import { ConnectionDetails } from '@/lib/types';
import { gql } from '@apollo/client';
import { auth } from '@clerk/nextjs/server';
//import {
//  AccessToken,
//  AccessTokenOptions,
//  VideoGrant,
//} from 'livekit-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

const GET_WORKSHOP_BY_ID = gql`
  query WorkshopMeetingRoomJoinInfo($workshopId: String!) {
    workshopMeetingRoomJoinInfo(workshopId: $workshopId) {
      id
      serverUrl
      token
      chatRoomId
    }
  }
`;

type WorkshopMeetingRoomJoinInfo = {
  id: string;
  serverUrl: string;
  token: string;
  chatRoomId: string;
};

export async function GET(request: NextRequest) {
  try {
    // Handle missing workshopId
    const workshopId = request.nextUrl.searchParams.get('workshopId');
    if (typeof workshopId !== 'string') {
      return NextResponse.json(
        {
          error: 'Missing required query parameter',
          message: 'workshopId',
          stack: null,
        },
        { status: 400 }
      );
    }

    // Get user data
    const sessionId = auth().sessionId;
    if (!sessionId) {
      return NextResponse.json(
        {
          error: 'Missing required user in server',
          message: 'sessionId',
          stack: null,
        },
        { status: 400 }
      );
    }
    const name = request.nextUrl.searchParams.get('name');

    // Get workshop data
    const apolloClient = createApolloClient(sessionId);
    const { data: workshopRoomData } = await apolloClient.query<{
      workshopMeetingRoomJoinInfo: WorkshopMeetingRoomJoinInfo;
    }>({
      query: GET_WORKSHOP_BY_ID,
      variables: { workshopId },
    });

    // Return connection details
    const data: ConnectionDetails = {
      chatRoomId: workshopRoomData.workshopMeetingRoomJoinInfo.chatRoomId,
      serverUrl: workshopRoomData.workshopMeetingRoomJoinInfo.serverUrl,
      roomName: workshopRoomData.workshopMeetingRoomJoinInfo.id,
      participantToken: workshopRoomData.workshopMeetingRoomJoinInfo.token,
      participantName: name ?? '',
    };

    // Return connection details
    return NextResponse.json(data);
  } catch (error) {
    // Handle return error
    if (error instanceof Error) {
      if (error.name == 'ApolloError') {
        return NextResponse.json(
          { error: error.name, message: error.message, stack: error },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: error.name, message: error.message, stack: error },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Unknown error', message: 'Unknown error', stack: error },
      { status: 500 }
    );
  }
}

// function createParticipantToken(userInfo: AccessTokenOptions, roomId: string) {
//   const at = new AccessToken(API_KEY, API_SECRET, userInfo);
//   at.ttl = '5m';
//   const grant: VideoGrant = {
//     room: roomId,
//     roomJoin: true,
//   };
//   at.addGrant(grant);
//   return at.toJwt();
// }
