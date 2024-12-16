import { createApolloClient } from '@/providers/apolloClient';
import { gql } from '@apollo/client';
import { Delta } from 'quill/core';

type EventDocumentServerRequestSyncDTO = {
  delta: Delta;
  documentId: string;
  pageIndex: number;
  cursor:
    | {
        id: string;
        name: string;
        color: string;
        range: { index: number; length: number };
      }
    | undefined
    | null;
};

export type EventDocumentServerRequestSyncResponse = {
  eventDocumentServerRequestSync: {
    delta: Delta;
    documentId: string;
    eventType: string;
    pageIndex: number;
    requestSync: boolean;
    senderId: string;
    totalPage: number;
    cursor:
      | {
          id: string;
          name: string;
          color: string;
          range: { index: number; length: number };
        }
      | undefined
      | null;
  };
};

const EVENTDOCUMENTSERVERSYNCSYNC = gql`
  mutation EventDocumentServerRequestSync(
    $delta: Delta
    $documentId: String
    $pageIndex: Int
    $cursor: CursorInput
  ) {
    eventDocumentServerRequestSync(
      data: {
        delta: $delta
        documentId: $documentId
        pageIndex: $pageIndex
        cursor: $cursor
      }
    ) {
      delta
      documentId
      cursor {
        color
        id
        name
        range {
          index
          length
        }
      }
      eventType
      pageIndex
      requestSync
      senderId
      totalPage
    }
  }
`;

export const useGetEventDocumentServerRequestSync = async (
  sessionId: string,
  delta: any,
  documentId: string,
  cursor:
    | {
        id: string;
        name: string;
        color: string;
        range: { index: number; length: number };
      }
    | undefined
    | null,
  pageIndex: number
) => {
  return createApolloClient(sessionId).mutate<
    EventDocumentServerRequestSyncResponse,
    EventDocumentServerRequestSyncDTO
  >({
    mutation: EVENTDOCUMENTSERVERSYNCSYNC,
    variables: { delta, documentId, pageIndex, cursor },
  });
};
