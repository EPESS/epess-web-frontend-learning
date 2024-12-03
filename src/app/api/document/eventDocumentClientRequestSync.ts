import { gql, useQuery } from "@apollo/client";
import { Delta } from "quill/core";
import { createApolloClient } from "@/providers/apolloClient";


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
query EventDocumentClientRequestSync ($documentId:String!,$pageIndex:Int!) {
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

const EVENTDOCUMENTCLIENTREQUESTSYNCCLASS = gql`
query EventDocumentClientRequestSyncClass ($documentId:String!,$pageIndex:Int!) {
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

export const useGetEventDocumentClientRequestSync = (documentId: string, pageIndex: number) => {
    return useQuery<EventDocumentClientRequestSyncResponse>(EVENTDOCUMENTCLIENTREQUESTSYNC, {
        variables: {
            documentId,
            pageIndex
        },
        skip: !documentId
    })
}

export const useGetEventDocumentClientRequestSyncClass = (sessionId: string, documentId: string, pageIndex: number) => {
    return createApolloClient(sessionId).query<EventDocumentClientRequestSyncResponse>({
        query: EVENTDOCUMENTCLIENTREQUESTSYNCCLASS,
        variables: {
            documentId,
            pageIndex
        }
    })
}