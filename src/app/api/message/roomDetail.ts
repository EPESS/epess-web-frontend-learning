import { gql, useQuery } from "@apollo/client";

type Sender = {
    avatarUrl: string;
    name: string;
    id: string;
}

export type Message = {
    chatRoomId: string;
    content: string;
    id: string;
    sentAt: Date;
    type: string;
    sender: Sender;
    chatRoom: {
        mentor: {
            avatarUrl: string
            name: string
        }
    }
}

type ChatRoom = {
    messages: Message[];
}


export const GETCHATROOMDETAIL = gql`
query Messages($chatRoomId: String, $skip: Int, $take: Int) {
    messages(
        filter: { chatRoomId: { equals: $chatRoomId } }
        skip: $skip
        take: $take
        orderBy: [{sentAt:Desc}]
    ) {
        chatRoomId
        content
        id
        senderId
        sentAt
        type
        sender {
            avatarUrl
            id
            name
        }
        chatRoom {
            mentor {
                avatarUrl
                name
            }
        }
    }
}
`

type TGetChatRoomDetail = {
    chatRoomId: string,
    skip?: number,
    take?: number
}

export const useGetChatRoomDetail = (room: TGetChatRoomDetail) => {
    return useQuery<ChatRoom>(GETCHATROOMDETAIL, {
        variables: {
            ...room,
            skip: Number(room.skip),
            take: Number(room.take),
        },
        fetchPolicy: "network-only",
        skip: !room.chatRoomId
    })
}
