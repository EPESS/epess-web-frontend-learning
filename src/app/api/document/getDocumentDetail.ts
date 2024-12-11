import { gql, useQuery } from "@apollo/client";
import { TDocument } from "./createDocument";

export type TDocumentResponse = {
    document: TDocument
}

export const DOCUMENT = gql`
query Document ($id:String) {
    document(where: { id: $id }) {
        createdAt
        fileUrl
        id
        isPublic
        name
        previewImage {
            actualFileName
            fileName
            fileType
            fileUrl
            id
            uploadedAt
            userId
        }
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
        collaborators {
            documentId
            readable
            writable
            user {
                avatarUrl
                email
                id
                name
            }
        }
    }
}
`

export const useGetDocument = (id: string) => {
    return useQuery<TDocumentResponse>(DOCUMENT, {
        variables: { id }
    })
}