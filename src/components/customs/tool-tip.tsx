import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { File, LinkIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { cn, getVNTime } from '@/lib/utils';
import { useUploadFile } from '@/app/api/file/file';

type TToolTipCustom = {
    triggerChildren: string,
    content: string,
}

export enum UploadedFileType {
    Document = 'DOCUMENT',
    Image = 'IMAGE',
    Other = 'OTHER'
  }

const ToolTipCustom = ({ content, triggerChildren }: TToolTipCustom) => {

    const TypeComponent = ({ message }: { message: string }): React.ReactNode => {
        let fileId = ""

        if (isURL(message)) {
            fileId = message.split("files/")[1]?.split("?")[0] as string;
        };

        const { data } = useUploadFile(fileId)

        const file = data?.uploadedFile

        switch (file?.fileType) {
            case UploadedFileType.Image: {
                return (
                    <div className='w-[200px] h-auto'>
                        <img className='rounded-lg h-full w-full object-cover' src={message} alt='image' />
                    </div>
                )
            }

            case UploadedFileType.Document: {
                return (
                    <div className='bg-gray-200 h-auto p-1 rounded-md'>
                        <Button className='!h-auto' asChild variant={"link"}>
                            <div className='flex items-center gap-2'>
                                <File className='w-5 h-5' />
                                <Link download target='_blank' href={message}>
                                    <div
                                        className='text-start'
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {file.actualFileName}
                                    </div>
                                </Link>
                            </div>
                        </Button>

                    </div>
                )
            }

            default:
                if (isURL(message)) {
                    return <div className='bg-gray-200 h-auto p-1 rounded-md'>
                        <Button className='!h-auto' asChild variant={"link"}>
                            <div className='flex items-center gap-2'>
                                <LinkIcon className='w-5 h-5' />
                                <Link target='_blank' href={message} >
                                    <div
                                        className='text-start'
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {message}
                                    </div>
                                </Link>
                            </div>
                        </Button>

                    </div>
                } else {
                    return <div
                        className={cn('border bg-gray-200 rounded-md p-2 w-fit text-start')}
                        style={{
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                        }}
                    >
                        {message}
                    </div>
                }
        }
    }

    const isURL = (str: string) => {
        const pattern = /^https:\/\//;
        const result = pattern.test(str)
        return result
    }

    return (
        <TooltipProvider>

            <Tooltip>
                <TooltipTrigger>
                    <TypeComponent message={triggerChildren} />

                </TooltipTrigger>
                <TooltipContent className={cn('w-fit')}>
                    <span>{getVNTime(new Date(content))}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ToolTipCustom 