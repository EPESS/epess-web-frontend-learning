"use client"

import { Paperclip, SendHorizontal, ThumbsUp } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import MoonLoader from 'react-spinners/MoonLoader';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { EmojiPicker } from '../emoji-picker';
import { EFileType, useCreateSingleUpload } from '@/app/api/file';
import { ChatInput } from './chat-input';

export enum MessageType {
    TEXT = 'TEXT',
    ATTACHMENT = 'ATTACHMENT'
}

type TChatBottomBar = {
    handleOnChange: (value: string | undefined, type?: MessageType) => void,
    loading?: boolean,
    fileExist?: boolean,
}

const TYPEIMAGE = ['image/png', 'image/jpg']

export default function ChatBottomBar({ handleOnChange, loading = false }: TChatBottomBar) {
    const [message, setMessage] = useState('');

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const { user } = useUser()

    const [uploadFile, { loading: uploadLoading }] = useCreateSingleUpload();

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleOnChange(message)
            setMessage('')
        }

        if (event.key === 'Enter' && event.shiftKey) {
            event.preventDefault();
            setMessage((prev) => prev + '\n');
        }
    };

    const handleKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleOnChange(message)
        setMessage('')
    };

    const handleThumbsUp = () => {
        handleOnChange("👍");
        setMessage("");
    };

    const handleSingleUploadFile = async (listFile: FileList | null) => {
        if (!listFile) return;
        const fileUpload = listFile[0]

        if (!fileUpload) {
            return;
        }

        let fileType = EFileType.IMAGE

        if (!TYPEIMAGE.includes(fileUpload.type)) {
            fileType = EFileType.DOCUMENT
        }

        const variables = {
            fileType: fileType,
            file: fileUpload,
            userId: user?.id ?? ''
        }

        const dataFile = await uploadFile({
            variables,
        });

        handleOnChange(dataFile.data?.singleUpload?.fileUrl, MessageType.ATTACHMENT)
        setMessage('')
    }


    return (
        <div className={cn('flex gap-3 h-[10%] border-t-2 border-gray-400/35')}>
            <div className='flex flex-col w-full'>
                <div className='flex justify-between items-center gap-2 px-2 w-full'>
                    <div className='flex cursor-pointer'>
                        {!message.trim() && (
                            <div
                                className={cn(
                                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                                    'h-9 w-9 cursor-pointer relative',
                                    'shrink-0'
                                )}
                            >
                                <div className='relative flex w-full h-full cursor-pointer'>
                                    <Input onChange={(e) => handleSingleUploadFile(e.target.files)} type='file' className='top-0 right-0 bottom-0 left-0 z-10 absolute opacity-0 w-full h-full cursor-pointer' />
                                    <Paperclip size={22} className='m-auto text-muted-foreground cursor-pointer' />
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <AnimatePresence initial={false}>
                        <motion.div
                            key='input'
                            className='relative w-full'
                            layout
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1 }}
                            transition={{
                                opacity: { duration: 0.05 },
                                layout: {
                                    type: 'spring',
                                    bounce: 0.15,
                                },
                            }}
                        >
                            <ChatInput
                                value={message}
                                ref={inputRef}
                                onPaste={(e) => console.log(e)}
                                onKeyDown={handleKeyPress}
                                onChange={handleInputChange}
                                placeholder='Nhập tin nhắn...'
                                className='rounded-full min-h-0'
                            />

                            <div className='right-4 bottom-2 absolute'>
                                <EmojiPicker
                                    onChange={(value) => {
                                        setMessage(message + value);
                                        if (inputRef.current) {
                                            inputRef.current.focus();
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>

                        {uploadLoading && loading ?
                            <div className='w-9 h-9 shrink-0'>
                                <MoonLoader size={25} className="w-full h-full" />
                            </div>
                            : message.trim() ? (
                                <Button
                                    onClick={(e) => handleKeyClick(e)}
                                    className='w-9 h-9 shrink-0'
                                    variant='ghost'
                                    size='icon'
                                >
                                    <SendHorizontal size={22} className='text-muted-foreground' />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleThumbsUp}
                                    className='w-9 h-9 shrink-0'
                                    variant='ghost'
                                    size='icon'
                                >
                                    <ThumbsUp size={22} className='text-muted-foreground' />
                                </Button>
                            )}
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}