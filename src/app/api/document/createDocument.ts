import { gql, useMutation } from "@apollo/client";

export type TDocument = {
    createdAt: Date;
    fileUrl: string;
    id: string;
    isPublic: boolean;
    name: string;
    ownerId: string;
    updatedAt: Date;
}

type CreateDocumentInput = {
    collaborationSessionId: string;
};

type CreateDocumentResponse = {
    createDocument: TDocument
};

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