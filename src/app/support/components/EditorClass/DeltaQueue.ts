import { ApolloClient, gql } from '@apollo/client';
import { Delta } from 'quill/core';

export interface DocumentDeltaInput {
  delta: Delta | null;
  documentId: string;
  pageIndex: number;
  cursor:
    | {
        color: string;
        id: string;
        name: string;
        range: {
          index: number;
          length: number;
        };
      }
    | undefined
    | null;
}

export default class DeltaQueue {
  private queue: DocumentDeltaInput[] = [];

  constructor(private clientHTTP: ApolloClient<any>) {}

  async emit(): Promise<void> {
    while (this.queue.length > 0) {
      const data = this.pop();
      if (!data) continue;
      const { delta, documentId, pageIndex } = data;
      const deltaStr = JSON.stringify(delta);
      // handle send delta to server
      await this.clientHTTP.mutate({
        mutation: gql`
          mutation EventDocumentChanged($data: DocumentDeltaInput!) {
            eventDocumentChanged(data: $data) {
              delta
              documentId
              pageIndex
              cursor {
                color
                id
                name
                range {
                  index
                  length
                }
              }
            }
          }
        `,
        variables: {
          data: {
            delta: deltaStr,
            documentId,
            pageIndex,
            cursor: data.cursor,
          },
        },
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
    await this.emit();
  }

  push(delta: DocumentDeltaInput) {
    this.queue.push(delta);
  }

  pop() {
    return this.queue.shift();
  }
}
