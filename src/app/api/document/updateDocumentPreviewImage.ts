import { createApolloClient } from '@/providers/apolloClient';
import { gql } from '@apollo/client';

type UpdateDocumentPreviewImageRequestDTO = {
  documentId: string;
  imageId: string;
};

export type UpdateDocumentPreviewImageResponse = {
  updateDocumentPreviewImage: {
    fileUrl: string;
    id: string;
    previewImage: {
      actualFileName: string;
      fileName: string;
      fileType: string;
      fileUrl: string;
      id: string;
      uploadedAt: string;
    };
  };
};

const UPDATE_DOCUMENT_PREVIEW_IMAGE = gql`
  mutation UpdateDocumentPreviewImage($documentId: String!, $imageId: String!) {
    updateDocumentPreviewImage(documentId: $documentId, imageId: $imageId) {
      fileUrl
      id
      previewImage {
        actualFileName
        fileName
        fileType
        fileUrl
        id
        uploadedAt
      }
    }
  }
`;

export const useUpdateDocumentPreviewImage = (
  sessionId: string,
  documentId: string,
  imageId: string
) => {
  return createApolloClient(sessionId).mutate<
    UpdateDocumentPreviewImageResponse,
    UpdateDocumentPreviewImageRequestDTO
  >({
    mutation: UPDATE_DOCUMENT_PREVIEW_IMAGE,
    variables: { documentId, imageId },
  });
};
