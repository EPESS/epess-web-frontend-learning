import { UploadedFileType } from "@/components/customs/tool-tip";
import { gql, useQuery } from "@apollo/client";

type UploadFile = {
    actualFileName: string
    fileName: string
    fileType: UploadedFileType
    fileUrl: string
    id: string
    uploadedAt: Date
    userId: string
}

export const UPLOADFILE = gql`
query UploadedFile ($fileName: String) {
    uploadedFile(where: { fileName: $fileName }) {
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

export const useUploadFile = (fileName: string) => {
    return useQuery<{ uploadedFile: UploadFile }>(UPLOADFILE, {
        variables: { fileName },
        skip: !fileName
    })
}