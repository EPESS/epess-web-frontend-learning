import { gql, useMutation } from "@apollo/client";

export type TUpdateDocument = {
    updateDocument: {
        createdAt: string;
        fileUrl: string;
        id: string;
        isPublic: boolean;
        name: string;
        owner: User;
        updatedAt: string;
    }
}

const UPDATEDOCUMENT = gql`
mutation UpdateDocument ($documentId:String!, $name:String) {
    updateDocument(
        data: { name: $name }
        documentId: $documentId
    ) {
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

export type TUseUpdateDocument = {
    documentId: string,
    name?: string | null,
    userId?: string
}

export const useUpdateDocument = () => {
    return useMutation<TUpdateDocument, TUseUpdateDocument>(UPDATEDOCUMENT)
}
