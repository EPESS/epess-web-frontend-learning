"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import ScaleLoader from 'react-spinners/ScaleLoader'
import ChatBottomBar, { MessageType } from './chat-bottom-bar'
import { useSendMessage } from '@/app/api/message'
import { useGetChatRoomDetail, Message } from '@/app/api/message/roomDetail'
import { clientWS } from '@/providers/apolloClient'
import { ScrollArea } from '@/components/ui/scroll-area'
import ToolTipCustom from '../tool-tip'
import { useAuth, useUser } from '@clerk/nextjs'
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@/components/ui/tooltip'

type TChatDetail = {
    roomId?: string,
}


// "74189dc6-4371-40ca-aaa7-93efc4c3a6be" bamboo

const ChatDetail = ({ roomId = "74189dc6-4371-40ca-aaa7-93efc4c3a6be" }: TChatDetail) => {

    const { isMeetingAndChatOpen } = useToggleMeetingAndChat()

    const { user } = useUser()
    const { sessionId } = useAuth()

    const bottomRef = useRef<HTMLDivElement | null>(null);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [sendMessage, { loading }] = useSendMessage()

    const [skip, setSkip] = useState(0)

    const { data: msg, loading: msgLoading, fetchMore } = useGetChatRoomDetail({
        chatRoomId: roomId ?? '',
        skip: skip,
        take: 10
    })

    const [listMsg, setListMsg] = useState<Message[]>([])

    const [isUserScroll, setIsUserScroll] = useState(false)

    const [incomingMessages, setIncomingMessages] = useState(0);

    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        if (isMeetingAndChatOpen) {
            setIncomingMessages(0);
        } else if (!isMeetingAndChatOpen && listMsg.length > 0) {
            setIncomingMessages(prev => prev + 1);
        }
    }, [isMeetingAndChatOpen, listMsg]);

    useEffect(() => {
        if (incomingMessages > 0) {
            setShowTooltip(true);
            const timer = setTimeout(() => setShowTooltip(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [incomingMessages]);

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
        for await (const result of clientWS(sessionId!).iterate<{ messageSent: Message }>({
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
        isMeetingAndChatOpen ? (
            <div className='relative px-2 w-full h-full'>
                <div className={cn('flex h-[88%] flex-col justify-end')}>
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
                                        <p className='font-bold text-[13px]'>{msg.sender.name}</p>
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
        ) : (
            // use opacity component to control opacity of the component
            <div className='flex flex-col justify-start items-center bg-white w-full h-full'>
                {!isMeetingAndChatOpen && incomingMessages > 0 && (
                    <div
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <TooltipProvider>
                            <Tooltip open={showTooltip}>
                                <TooltipTrigger asChild>
                                    <div className='flex justify-center items-center bg-gray-100 shadow-sm mb-2 rounded-lg w-12 h-10'>
                                        <MessageCircle size={20} />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Có {incomingMessages - 1} tin nhắn mới</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )}
            </div>
        )
    )
}

export default ChatDetail

//    {/* <div className='top-0 right-0 left-0 z-50 absolute bg-white border-b-[1px] h-auto'>
//                 <div className={cn('flex justify-between items-center p-4')}>
//                     <div className='flex items-end gap-3'>
//                         <div>
//                             <Avatar>
//                                 <AvatarImage src={receiverUser?.mentor?.avatarUrl} />
//                                 <AvatarFallback>CN</AvatarFallback>
//                             </Avatar>
//                         </div>
//                         <div>
//                             <p className='font-bold text-[13px]'>{receiverUser?.mentor?.name}</p>
//                             <p className='flex items-center gap-2 text-[12px]'>
//                                 <span>
//                                     Đang hoạt động
//                                 </span>
//                                 <span>
//                                     <span className="relative flex w-3 h-3">
//                                         <span className="inline-flex absolute bg-[#1ed242] opacity-75 rounded-full w-full h-full animate-ping"></span>
//                                         <span className="inline-flex relative bg-[#1ed242] rounded-full w-3 h-3"></span>
//                                     </span>
//                                 </span>
//                             </p>
//                         </div>
//                     </div>
//                     <div>
//                         <Video stroke='#ababab' className='w-8 h-8 cursor-pointer' />
//                     </div>
//                 </div>
//             </div> */}