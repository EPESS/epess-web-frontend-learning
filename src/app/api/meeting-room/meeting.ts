import { gql, useLazyQuery } from "@apollo/client";

// Define Collaborator type
type TCollaborator = {
    id: string;
    meetingRoomId: string;
    userId: string;
    user: User;
};

// Define MeetingRoom type
type TMeetingRoom = {
    collaborationSessionId: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    collaborators: TCollaborator[];
};

// Define the response type for the GraphQL query
type TMeetingRoomQueryResponse = {
    meetingRoom: TMeetingRoom;
};


const MEETINGROOM = gql`
query MeetingRoom ($scheduleDateId:String!) {
    meetingRoom(scheduleDateId: $scheduleDateId) {
        collaborationSessionId
        createdAt
        id
        updatedAt
        collaborators {
            id
            meetingRoomId
            userId
            user {
                avatarUrl
                bankAccountNumber
                bankBin
                createdAt
                email
                id
                name
                packageValue
                phoneNumber
                role
                updatedAt
            }
        }
    }
}
`

export const useGetMeetingRoom = (scheduleDateId: string) => {
    return useLazyQuery<TMeetingRoomQueryResponse>(MEETINGROOM, {
        variables: { scheduleDateId }
    })
}

