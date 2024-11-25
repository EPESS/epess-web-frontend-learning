import { gql, useMutation } from "@apollo/client";

const UPDATEACTIVEDOCUMENTID = gql`
mutation UpdateActiveDocumentId ($activeDocumentId:String!, $collaborationSessionId:String!) {
    updateActiveDocumentId(activeDocumentId: $activeDocumentId, collaborationSessionId:  $collaborationSessionId) {
        activeDocumentId
        chatRoomId
        createdAt
        id
        updatedAt
    }
}
`

export type TUseUpdateActiveDocumentId = {
    activeDocumentId: string,
    collaborationSessionId: string
}

export const useUpdateActiveDocumentId = () => {
    return useMutation<any, TUseUpdateActiveDocumentId>(UPDATEACTIVEDOCUMENTID)
}