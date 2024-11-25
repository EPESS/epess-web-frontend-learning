import { gql, useMutation } from "@apollo/client";

const CREATEDOCUMENT = gql`
mutation CreateDocument {
    createDocument {
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

export const useCreateDocument = () => {
    return useMutation(CREATEDOCUMENT)
}