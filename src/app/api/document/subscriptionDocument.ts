import { gql } from "@apollo/client";

const SUBSCRIPTIONDOCUMENT = gql`
subscription Document {
    document(documentId: "57247cf9-3261-4ea1-9639-14a3d8af949b") {
        delta
        documentId
        eventType
        pageIndex
        senderId
    }
}
`

