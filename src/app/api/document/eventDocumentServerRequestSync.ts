import { createApolloClient } from "@/providers/apolloClient";
import { gql } from "@apollo/client";
import { Delta } from "quill/core";

type EventDocumentServerRequestSyncDTO = {
    delta: Delta,
    documentId: string,
    pageIndex: number
}

export type EventDocumentServerRequestSyncResponse = {
    eventDocumentServerRequestSync: {
        delta: Delta
        documentId: string
        eventType: string
        pageIndex: number
        requestSync: boolean
        senderId: string
        totalPage: number
    }
}

const EVENTDOCUMENTSERVERSYNCSYNC = gql`
mutation EventDocumentServerRequestSync ($delta:Delta, $documentId:String, $pageIndex:Int) {
    eventDocumentServerRequestSync(
        data: { delta: $delta, documentId: $documentId, pageIndex: $pageIndex }
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

export const useGetEventDocumentServerRequestSync = (
    sessionId: string,
    delta: any,
    documentId: string,
    pageIndex: number) => {
    return createApolloClient(sessionId).mutate<EventDocumentServerRequestSyncResponse, EventDocumentServerRequestSyncDTO>({ mutation: EVENTDOCUMENTSERVERSYNCSYNC, variables: { delta, documentId, pageIndex } })
}