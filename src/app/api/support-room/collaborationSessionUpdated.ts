import { gql } from "@/graphql";
import { createApolloClient } from "@/providers/apolloClient";

type TActiveDocument = {
    createdAt: string;
    fileUrl: string;
    id: string;
    isPublic: boolean;
    name: string;
    owner: User;
    updatedAt: string;
}

export type TCollaborationSessionUpdated = {
    collaborationSessionUpdated: {
        activeDocumentId: string;
        chatRoomId: string;
        createdAt: string;
        id: string;
        updatedAt: string;
        activeDocument: TActiveDocument;
    }
}

export const useGetCollaborationSessionUpdated = async (sessionId: string | null | undefined, collaborationSessionUpdated: string | undefined, handleChange: (data: TCollaborationSessionUpdated) => void) => {
    if (collaborationSessionUpdated && sessionId) {
        const result = createApolloClient(sessionId).subscribe<TCollaborationSessionUpdated>({
            query: gql(
                `
            subscription CollaborationSessionUpdated ($collaborationSessionUpdated: String!) {
        collaborationSessionUpdated(
            collaborationSessionId: $collaborationSessionUpdated
        ) {
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
                owner {
                    avatarUrl
                    bankAccountNumber
                    bankBin
                    banned
                    createdAt
                    email
                    id
                    name
                    phoneNumber
                }
                updatedAt
            }
        }
    }`
            ),
            variables: {
                collaborationSessionUpdated
            }
        })

        result.subscribe({
            next: (data) => {
                if (data.data) {
                    handleChange(data.data)
                }
                else {
                    console.error('No data')
                }
            },
            error: (error) => {
                console.error(error)
            }
        })
    }


}