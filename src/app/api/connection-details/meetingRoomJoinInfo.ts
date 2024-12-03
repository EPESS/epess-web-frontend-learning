import { gql, useLazyQuery } from "@apollo/client";

export type TuseGetMeetingRoomJoinInfo = {
    id: string
    serverUrl: string
    token: string
}

export type TuseGetMeetingRoomJoinInfoResponse = {
    meetingRoomJoinInfo: TuseGetMeetingRoomJoinInfo
}

const MEETINGROOMJOININFO = gql`
query MeetingRoomJoinInfo ($collaborationSessionId:String!) {
    meetingRoomJoinInfo(collaborationSessionId: $collaborationSessionId) {
        id
        serverUrl
        token
    }
}
`

export const useGetMeetingRoomJoinInfo = (collaborationSessionId: string) => {
    return useLazyQuery<TuseGetMeetingRoomJoinInfoResponse>(MEETINGROOMJOININFO, {
        variables: {
            collaborationSessionId
        },
    })
}