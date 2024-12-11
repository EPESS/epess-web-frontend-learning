import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export type TAddCollaboratorResponse = {
    addCollaborator: {
        documentId: string;
        readable: boolean;
        userId: string;
        writable: boolean;
    };
}

export type TRemoveCollaboratorResponse = {
    removeCollaborator: {
        documentId: string;
        readable: boolean;
        userId: string;
        writable: boolean;
    };
}

export type TEditCollaboratorResponse = {
    editCollaboratorPermission: {
        documentId: string;
        readable: boolean;
        user: User,
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
const EDITCOLLABORATORPERMISSION = gql`
mutation EditCollaboratorPermission ($documentId:String!,$readable:Boolean!, $userId:String!, $writable: Boolean!)  {
    editCollaboratorPermission(
        documentId: $documentId
        readable: $readable
        userId: $userId
        writable: $writable
    ) {
        documentId
        readable
        user {
            avatarUrl
            bankAccountNumber
            bankBin
            banned
            createdAt
            email
            id
            name
            phoneNumber
            role
            updatedAt
        }
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


export const useEditCollaboratorPermission = () => {
    return useMutation<TEditCollaboratorResponse, TAddCollaboratorDTO>(EDITCOLLABORATORPERMISSION, {
        onError: (error) => {
            toast.error(error.message)
        }
    })
}

export const useAddCollaborator = () => {
    return useMutation<TAddCollaboratorResponse, TAddCollaboratorDTO>(ADDCOLLABORATOR)
}
export const useRemoveCollaborator = () => {
    return useMutation<TRemoveCollaboratorResponse, TRemoveCollaboratorDTO>(REMOVECOLLABORATOR)
}