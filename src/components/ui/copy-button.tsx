'use client';

import { Button } from '@/components/ui/button';
import {
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Tooltip,
} from '@/components/ui/tooltip';
import { Copy } from 'lucide-react';
import React, { useRef, useState } from 'react';

type TCopyButton = {
    content: string;
};

export default function CopyButton({ content }: TCopyButton) {
    const [isCopied, setIsCopied] = useState(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleCopy = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        navigator.clipboard.writeText(content);
        setIsCopied(true);
        timeoutRef.current = setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <TooltipProvider>
            <Tooltip open={isCopied}>
                <TooltipTrigger asChild>
                    <Button onClick={handleCopy} variant='ghost' size='icon'>
                        <Copy className='w-3 h-3' />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Copied</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}