import { gql, useMutation } from "@apollo/client";

const SINGLEUPLOAD = gql`
mutation SingleUpload ($file:Upload!,$userId:String!,$fileType:UploadedFileType! = IMAGE) {
    singleUpload(file: $file, fileType: $fileType, userId: $userId) {
        actualFileName
        fileName
        fileType
        fileUrl
        id
        uploadedAt
        userId
    }
}
`
type TSingleUploadResponse = {
    singleUpload: {
        actualFileName: string;
        fileName: string;
        fileType: EFileType;
        fileUrl: string;
        id: string;
        uploadedAt: string; // ISO date string
        userId: string;
    };
}

export enum EFileType {
    DOCUMENT = 'DOCUMENT',
    IMAGE = 'IMAGE',
    OTHER = 'OTHER'
}

type TSingleUpload = {
    file: File,
    fileType: EFileType,
    userId: string
}

export const useCreateSingleUpload = () => {
    // eslint-disable-next-line
    return useMutation<TSingleUploadResponse, TSingleUpload>(SINGLEUPLOAD)
}