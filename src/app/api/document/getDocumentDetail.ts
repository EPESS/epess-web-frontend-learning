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
        ownerId
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