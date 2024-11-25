import { gql, useMutation } from "@apollo/client";

type CreateDocumentInput = {
    collaborationSessionId: string;
};

type CreateDocumentResponse = {
    createDocument: {
        createdAt: string;
        fileUrl: string;
        id: string;
        isPublic: boolean;
        name: string;
        ownerId: string;
        updatedAt: string;
    };
};

const CREATEDOCUMENT = gql`
mutation CreateDocument ($collaborationSessionId: String) {
    createDocument(input: { collaborationSessionId: $collaborationSessionId }) {
        createdAt
        fileUrl
        id
        isPublic
        name
        ownerId
        updatedAt
    }
}
`

export const useCreateDocument = (collaborationSessionId: string) => {
    return useMutation<CreateDocumentResponse, CreateDocumentInput>(CREATEDOCUMENT, {
        variables: { collaborationSessionId }
    })
}