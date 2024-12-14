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

const GET_INTERVIEW_BY_SCHEDULE_ID = gql`
  query InterviewJoinInfo($scheduleId: String!) {
    interviewJoinInfo(scheduleId: $scheduleId) {
      id
      serverUrl
      token
    }
  }
`;

type InterviewRoomJoinInfo = {
  id: string;
  serverUrl: string;
  token: string;
};

export async function GET(request: NextRequest) {
  try {
    // Handle missing scheduleId
    const scheduleId = request.nextUrl.searchParams.get('scheduleId');
    if (typeof scheduleId !== 'string') {
      return NextResponse.json(
        {
          error: 'Missing required query parameter',
          message: 'scheduleId',
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

    // Get interview data
    const apolloClient = createApolloClient(sessionId);
    const { data: interviewRoomData } = await apolloClient.query<{
      interviewJoinInfo: InterviewRoomJoinInfo;
    }>({
      query: GET_INTERVIEW_BY_SCHEDULE_ID,
      variables: { scheduleId },
    });

    // Return connection details
    const data: ConnectionDetails = {
      serverUrl: interviewRoomData.interviewJoinInfo.serverUrl,
      roomName: interviewRoomData.interviewJoinInfo.id,
      participantToken: interviewRoomData.interviewJoinInfo.token,
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
