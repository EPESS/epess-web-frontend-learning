import { gql, useMutation } from "@apollo/client";

export type TDocument = {
    createdAt: Date;
    fileUrl: string;
    id: string;
    isPublic: boolean;
    name: string;
    owner: User;
    updatedAt: Date;
    previewImage: TPreviewImage
    collaborators: TCollaborator[]
}

type TPreviewImage = {
    actualFileName: string
    fileName: string
    fileType: string
    fileUrl: string
    id: string
    uploadedAt: Date
    userId: string
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
mutation CreateSelfDocument  {
    createDocument{
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
`

const CREATEDOCUMENT = gql`
mutation CreateDocument ($collaborationSessionId: String) {
    createDocument(input: { collaborationSessionId: $collaborationSessionId }) {
        createdAt
        fileUrl
        id
        isPublic
        name
        updatedAt
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