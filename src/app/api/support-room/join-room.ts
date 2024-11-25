import { gql, useLazyQuery, useQuery } from "@apollo/client";

// Type for the nested ChatRoom object
type TChatRoom = {
    id: string;
};

// Type for the CollaborationSession
export type TCollaborationSession = {
    activeDocumentId: string;
    chatRoomId: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    chatRoom: TChatRoom;
};

// Type for the response from the query
export type TCollaborationSessionResponse = {
    collaborationSession: TCollaborationSession;
};


const JOINROOM = gql`
query CollaborationSession ($scheduleDateId: String!) {
    collaborationSession(scheduleDateId: $scheduleDateId) {
        activeDocumentId
        chatRoomId
        createdAt
        id
        updatedAt
        chatRoom {
            id
        }
    }
}
`

export const useJoinRoom = () => {
    return useLazyQuery<TCollaborationSessionResponse>(JOINROOM)
}

export const useJoinRoomQuery = (scheduleDateId: string) => {
    return useQuery<TCollaborationSessionResponse>(JOINROOM, {
        variables: { scheduleDateId },
        skip: !scheduleDateId
    })
}