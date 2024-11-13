"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Video } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import ScaleLoader from 'react-spinners/ScaleLoader'
import ChatBottomBar, { MessageType } from './chat-bottom-bar'
import { useSendMessage } from '@/app/api/message'
import { getChatRoomDetail, Message } from '@/app/api/message/roomDetail'
import { clientWS } from '@/providers/apolloClient'
import { ScrollArea } from '@/components/ui/scroll-area'
import ToolTipCustom from '../tool-tip'

type TChatDetail = {
    roomId?: string,
}


// "74189dc6-4371-40ca-aaa7-93efc4c3a6be" bamboo

const ChatDetail = ({ roomId = "74189dc6-4371-40ca-aaa7-93efc4c3a6be" }: TChatDetail) => {

    const { user } = useUser()

    const bottomRef = useRef<HTMLDivElement | null>(null);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [sendMessage, { loading }] = useSendMessage()

    const [skip, setSkip] = useState(0)

    const { data: msg, loading: msgLoading, fetchMore } = getChatRoomDetail({
        chatRoomId: roomId ?? '',
        skip: skip,
        take: 10
    })

    const [listMsg, setListMsg] = useState<Message[]>([])

    const [isUserScroll, setIsUserScroll] = useState(false)

    const handleSendMessage = ({ msg, type = MessageType.TEXT }: { msg: string | undefined, type?: MessageType }) => {
        if (!msg) return;
        sendMessage({
            variables: {
                chatRoomId: roomId ?? '',
                content: msg.trim(),
                type
            }
        })
    }

    const subscribeMessages = async () => {
        for await (const result of clientWS.iterate<{ messageSent: Message }>({
            query: `subscription MessageSent {
    messageSent(chatRoomId: "${roomId}") {
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
}`,
        })) {
            if (result?.data?.messageSent) {
                const message = result.data.messageSent;
                setIsUserScroll(false)
                scrollToBottom()
                setListMsg(prev => {
                    const msg = prev.find(item => item.id === message.id);
                    if (!msg) {
                        return [message, ...prev]
                    }
                    return prev
                })
            }
        }
    }

    const handleScroll = async () => {

        if (scrollRef.current) {
            const { scrollTop } = scrollRef.current;

            if (scrollRef.current.scrollTop === scrollRef.current.scrollHeight) {
                setIsUserScroll(false)
            }

            if (scrollTop === 0) {
                setIsUserScroll(true)
                setSkip(prev => {
                    (async () => {
                        const data = await fetchMore({
                            variables: {
                                skip: prev + 20,
                            }
                        })

                        if (data.data.messages.length === 0) {
                            scrollRef.current?.removeEventListener('scroll', handleScroll);
                        }
                    })()
                    return prev + 10
                }
                )
            }

        }
    };

    const scrollToBottom = (height?: number) => {
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = height ?? scrollRef.current.scrollHeight;
                scrollRef.current.style.scrollBehavior = 'smooth';
            }
        }, 300);
    };

    useEffect(() => {
        if (msg?.messages) {
            setListMsg(prev => [...prev, ...msg.messages]);
            isUserScroll && scrollToBottom(100)
        }
    }, [msg?.messages])

    useEffect(() => {
        scrollToBottom()
    }, [])

    useEffect(() => {
        subscribeMessages().catch((err) => console.log("hello", err));
    }, [])

    useEffect(() => {
        const scrollArea = scrollRef.current;
        if (scrollArea) {
            scrollArea.addEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        return () => {
            setListMsg([])
        }
    }, [])

    return (
        <div className='w-full h-full relative'>
            {/* <div className='bg-white border-b-[1px] z-50 h-auto absolute top-0 right-0 left-0'>
                <div className={cn('flex justify-between items-center p-4')}>
                    <div className='flex gap-3 items-end'>
                        <div>
                            <Avatar>
                                <AvatarImage src={receiverUser?.mentor?.avatarUrl} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            <p className='text-[13px] font-bold'>{receiverUser?.mentor?.name}</p>
                            <p className='flex gap-2 text-[12px] items-center'>
                                <span>
                                    Đang hoạt động
                                </span>
                                <span>
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1ed242] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1ed242]"></span>
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Video stroke='#ababab' className='cursor-pointer h-8 w-8' />
                    </div>
                </div>
            </div> */}
            <div className={cn('flex h-[90%] flex-col justify-end pt-[4.5rem]')}>
                <ScrollArea ref={scrollRef} className='h-[80vh]'>
                    <div>
                        {msgLoading && <div className='flex justify-center mt-10'><ScaleLoader /></div>}
                        {listMsg && [...listMsg].reverse().map((msg) => (
                            <div className={cn('flex gap-3 p-4 items-end')} key={msg.id}>
                                <div className={cn((msg.sender.id === user?.id) && 'order-2')}>
                                    <Avatar>
                                        <AvatarImage src={msg.sender.avatarUrl} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className={cn("w-full flex flex-col", (msg.sender.id === user?.id) && "text-end items-end")}>
                                    <p className='text-[13px] font-bold'>{msg.sender.name}</p>
                                    <div className="w-fit">
                                        <ToolTipCustom
                                            content={msg.sentAt.toString()}
                                            triggerChildren={msg.content}
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div ref={bottomRef} />
                </ScrollArea>
            </div>
            <ChatBottomBar loading={loading} handleOnChange={(value, type) => handleSendMessage({ msg: value, type })} />
        </div>
    )
}

export default ChatDetail