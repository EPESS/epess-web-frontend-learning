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
import { ArrowDownCircle, MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipProvider } from '@/components/ui/tooltip'
import CopyButton from '@/components/ui/copy-button'

type TChatDetail = {
    roomId: string | undefined,
    containerClassName?: string
}

const ChatDetail = ({ roomId, containerClassName }: TChatDetail) => {

    const { isMeetingAndChatOpen } = useToggleMeetingAndChat()

    const { user } = useUser()
    const { sessionId } = useAuth()



    const [incomingMessages, setIncomingMessages] = useState(0);

    const [showTooltip, setShowTooltip] = useState(false);


    const bottomRef = useRef<HTMLDivElement | null>(null);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [sendMessage, { loading }] = useSendMessage();

    const [skip, setSkip] = useState(0);

    const {
        data: msg,
        loading: msgLoading,
        fetchMore,
    } = useGetChatRoomDetail({
        chatRoomId: roomId ?? '',
        skip: skip,
        take: 10,
    });

    const [listMsg, setListMsg] = useState<Message[]>([]);

    const [isUserScroll, setIsUserScroll] = useState(false);

    const [newMessage, setNewMessage] = useState<React.ReactNode | undefined>(
        undefined
    );
    const [isMe, setIsMe] = useState<React.ReactNode | undefined>(undefined);

    const handleSendMessage = ({
        msg,
        type = MessageType.TEXT,
    }: {
        msg: string | undefined;
        type?: MessageType;
    }) => {
        if (!msg) return;
        sendMessage({
            variables: {
                chatRoomId: roomId ?? '',
                content: msg.trim(),
                type,
            },
        });
        scrollToBottom();
    };

    const subscribeMessages = async () => {
        if (!sessionId) return;

        for await (const result of clientWS(sessionId).iterate<{
            messageSent: Message;
        }>({
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

                if (user?.id !== message.sender.id) {
                    setNewMessage(
                        <div className='rounded-md py-2 px-4 bg-amber-200 dark:bg-amber-900'>
                            <span className='text-sm text-black'>Bạn có tin nhắn mới</span>
                        </div>
                    );
                }

                setListMsg((prev) => {
                    const msg = prev.find((item) => item.id === message.id);
                    if (!msg) {
                        return [message, ...prev];
                    }
                    return prev;
                });
            }
        }
    };

    const handleScrollNewMessage = () => {
        scrollToBottom();
        setIsUserScroll(false);
    };

    const isFetchMore = useRef(true);
    const handleScroll = async () => {
        if (scrollRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;

            if (scrollHeight - scrollTop - clientHeight < 1) {
                setNewMessage(undefined);
                setIsMe(undefined);
                setIsUserScroll(false);
            }

            if (scrollHeight - scrollTop - clientHeight > 50) {
                setIsMe(<ArrowDownCircle className='w-6 h-6' />);
            }

            if (scrollTop === 0 && isFetchMore.current) {
                setIsUserScroll(true);
                setSkip((prev) => {
                    (async () => {
                        const data = await fetchMore({
                            variables: {
                                skip: prev + 20,
                            },
                        });

                        if (data.data.messages.length === 0) {
                            isFetchMore.current = false;
                        }
                    })();
                    return prev + 10;
                });
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
            const newMsg = [...listMsg, ...msg.messages].filter(
                (item, index, self) => index === self.findIndex((t) => t.id === item.id)
            );
            setListMsg(newMsg);
            isUserScroll && scrollToBottom(100);
        }
    }, [msg?.messages]);

    useEffect(() => {
        scrollToBottom();
    }, []);

    useEffect(() => {
        subscribeMessages().catch((err) => console.log('hello', err));
    }, []);

    useEffect(() => {
        const scrollArea = scrollRef.current;
        if (scrollArea) {
            scrollArea.addEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        return () => {
            setListMsg([]);
        };
    }, []);


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

    return (
        isMeetingAndChatOpen ? (
            <div className='relative px-2 w-full h-full'>
                {
                    (newMessage || isMe) &&
                    <div className='absolute bottom-[70px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                        <div className='cursor-pointer' onClick={handleScrollNewMessage}>
                            {newMessage ? newMessage : isMe}
                        </div>
                    </div>
                }
                <div className={cn('flex h-[88%] flex-col justify-end', containerClassName)}>
                    <ScrollArea ref={scrollRef} className='h-[80vh]'>
                        <div>
                            {msgLoading && <div className='flex justify-center mt-10'><ScaleLoader /></div>}
                            {listMsg && [...listMsg].reverse().map((msg) => (
                                <div className={cn('flex gap-3 p-4 items-end')} key={msg.id}>
                                    <div className={cn((msg.sender.id === user?.id) && 'order-2')}>
                                        <Avatar>
                                            <AvatarImage className='!object-cover' src={msg.sender.avatarUrl} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <UserMsg msg={msg} user={user} />
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

const UserMsg = ({
    msg,
    user,
}: {
    msg: Message;
    user: ReturnType<typeof useUser>['user'];
}) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsHover(true);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsHover(false);
    };

    return (
        <div
            className={cn(
                'w-full flex flex-col',
                msg.sender.id === user?.id && 'text-end items-end'
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='text-[12.5px] font-bold'>{msg.sender.name}</p>
            <div className='max-w-[25vw] mt-1'>
                <div className='w-full flex items-center gap-2'>
                    <div className='relative'>
                        <ToolTipCustom
                            content={msg.sentAt.toString()}
                            triggerChildren={msg.content}
                        />
                        {isHover && msg.type === MessageType.TEXT && (
                            <div
                                className={cn(
                                    'absolute top-1/2 -translate-y-1/2',
                                    msg.sender.id !== user?.id ? '-right-12' : '-left-12'
                                )}
                            >
                                <CopyButton content={msg.content} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};