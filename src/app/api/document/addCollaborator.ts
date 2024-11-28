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

export type TAddCollaboratorDTO = {
    documentId: string
    readable?: boolean
    userId: string
    writable?: boolean
}

export const useAddCollaborator = () => {
    return useMutation<AddCollaboratorResponse, TAddCollaboratorDTO>(ADDCOLLABORATOR)
}