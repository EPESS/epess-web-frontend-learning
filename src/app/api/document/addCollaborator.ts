import { gql, useMutation } from "@apollo/client";

export type AddCollaboratorResponse = {
    addCollaborator: {
        documentId: string;
        readable: boolean;
        userId: string;
        writable: boolean;
    };
}

const ADDCOLLABORATOR = gql`
mutation AddCollaborator ($documentId:String!,$readable:Boolean! = true, $userId:String!, $writable: Boolean! = true) {
    addCollaborator(
        documentId: $documentId
        readable: $readable
        userId: $userId
        writable: $writable
    ) {
        documentId
        readable
        userId
        writable
    }
}
`
const REMOVECOLLABORATOR = gql`
mutation RemoveCollaborator ($documentId:String!, $userId:String!) {
    removeCollaborator(documentId: $documentId, userId: $userId) {
        documentId
        readable
        userId
        writable
    }
}
`

export type TAddCollaboratorDTO = {
    documentId: string
    readable?: boolean
    userId: string
    writable?: boolean
}

export type TRemoveCollaboratorDTO = {
    documentId: string,
    userId: string
}

export const useAddCollaborator = () => {
    return useMutation<AddCollaboratorResponse, TAddCollaboratorDTO>(ADDCOLLABORATOR)
}
export const useRemoveCollaborator = () => {
    return useMutation<AddCollaboratorResponse, TRemoveCollaboratorDTO>(REMOVECOLLABORATOR)
}