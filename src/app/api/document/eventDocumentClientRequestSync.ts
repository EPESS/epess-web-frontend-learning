import { gql, useQuery } from "@apollo/client";
import { Delta } from "quill/core";

export type EventDocumentClientRequestSyncResponse = {
    eventDocumentClientRequestSync: {
        delta: Delta | string
        documentId: string
        eventType: string
        pageIndex: number
        requestSync: boolean
        senderId: string
        totalPage: number
    }
}

const EVENTDOCUMENTCLIENTREQUESTSYNC = gql`
query EventDocumentClientRequestSync ($documentId:String!,$pageIndex:Int! = 0 ) {
    eventDocumentClientRequestSync(
        documentId: $documentId
        pageIndex: $pageIndex
    ) {
        delta
        documentId
        eventType
        pageIndex
        requestSync
        senderId
        totalPage
    }
}
`

export const useGetEventDocumentClientRequestSync = (documentId: string, pageIndex: number = 0) => {
    return useQuery<EventDocumentClientRequestSyncResponse>(EVENTDOCUMENTCLIENTREQUESTSYNC, {
        variables: {
            documentId,
            pageIndex
        }
    })
}