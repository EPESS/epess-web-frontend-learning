import { gql, useQuery } from "@apollo/client";
import { TDocument } from "./createDocument";

type TMyDocumentResponse = {
    myDocuments: TDocument[]
}

export const MYDOCUMENT = gql`
query MyDocuments ($skip:Int, $take:Int) {
    myDocuments(skip: $skip, take: $take, orderBy: [{updatedAt: Desc}]) {
        createdAt
        fileUrl
        id
        isPublic
        name
        ownerId
        updatedAt
    }
}
`

export const useGetMyDocuments = (skip: number = 0, take: number = 10) => {
    return useQuery<TMyDocumentResponse>(MYDOCUMENT, {
        variables: {
            skip,
            take
        }
    })
}



