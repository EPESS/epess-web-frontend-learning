import { gql, useMutation } from "@apollo/client";

export type TDocument = {
    createdAt: Date;
    fileUrl: string;
    id: string;
    isPublic: boolean;
    name: string;
    ownerId: string;
    updatedAt: Date;
    collaborators: TCollaborator[]
}

type CreateDocumentInput = {
    collaborationSessionId: string;
};

type CreateDocumentResponse = {
    createDocument: TDocument
};

type TCollaborator = {
    documentId: string,
    readable: boolean,
    writable: boolean,
    user: {
        avatarUrl: string
        email: string
        id: string
        name: string
    }
}

const CREATESELFDOCUMENT = gql`
mutation CreateDocument  {
    createDocument{
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
        variables: { collaborationSessionId },
    })
}

export const useCreateSelfDocument = () => {
    return useMutation<CreateDocumentResponse>(CREATESELFDOCUMENT)
}