import { createApolloClient } from '@/providers/apolloClient';
import { gql } from '@apollo/client';

type UploadPreviewImgDocRequestDTO = {
  file: File;
  userId: string;
};

export type UploadPreviewImgDocResponse = {
  singleUpload: {
    id: string;
  };
};

const UPLOADPREVIEWIMGDOC = gql`
  mutation UploadPreviewImgDoc($file: Upload!, $userId: String!) {
    singleUpload(file: $file, fileType: IMAGE, userId: $userId) {
      id
    }
  }
`;

export const useUploadPreviewImgDoc = (
  sessionId: string,
  file: File,
  userId: string
) => {
  return createApolloClient(sessionId).mutate<
    UploadPreviewImgDocResponse,
    UploadPreviewImgDocRequestDTO
  >({
    mutation: UPLOADPREVIEWIMGDOC,
    variables: { file, userId },
  });
};
