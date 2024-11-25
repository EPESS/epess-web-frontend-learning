import { gql, useLazyQuery, useQuery } from "@apollo/client";

type TActiveDocument = {
    createdAt: Date
    fileUrl: string
    id: string
    isPublic: boolean
    name: string
    ownerId: string
    updatedAt: Date
}

// Type for the CollaborationSession
export type TCollaborationSession = {
    activeDocumentId: string;
    chatRoomId: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    activeDocument: TActiveDocument;
};

// Type for the response from the query
export type TCollaborationSessionResponse = {
    collaborationSession: TCollaborationSession;
};

export enum EJoinRoomErrorCode {
    MentorSessionNotCreated = "Mentor does not created collaboration session yet",
    UserNotAllowed = "User not allowed",
    OrderNotFound = "Order not found",
    OrderChatRoomNotFound = "Order chat room not found",
    ScheduleDateNotFound = "Schedule date not found",
    ChatRoomNotFound = "Chat room not found",
    CollaborationNotTime = "Collaboration session not allowed in this time"
}

const JOINROOM = gql`
query CollaborationSession ($scheduleDateId: String!) {
    collaborationSession(scheduleDateId: $scheduleDateId) {
        activeDocumentId
        chatRoomId
        createdAt
        id
        updatedAt
        activeDocument {
            createdAt
            fileUrl
            id
            isPublic
            name
            ownerId
            updatedAt
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