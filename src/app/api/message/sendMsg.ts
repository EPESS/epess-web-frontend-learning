import { gql, useMutation } from "@apollo/client";

const SENDMESSAGE = gql`
mutation SendMessage ($chatRoomId:String,$content:String!,$type: MessageType! = TEXT) {
    sendMessage(
        input: {
            chatRoom: { connect: { id: $chatRoomId } }
            content: $content
            type: $type
        }
    ) {
        id
        content
    }
}`

export enum MessageType {
    TEXT = 'TEXT',
    ATTACHMENT = 'ATTACHMENT'
}

type TSendMessage = {
    chatRoomId: string,
    content: string,
    type: MessageType
}

export const useSendMessage = () => {
     // eslint-disable-next-line
    return useMutation<any, TSendMessage>(SENDMESSAGE)
}