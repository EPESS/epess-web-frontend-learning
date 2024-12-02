"use client"

import Image from 'next/image';
import React, { AllHTMLAttributes } from 'react';
import { UserNav } from './user-nav';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface THeader extends AllHTMLAttributes<HTMLElement> {

}

export default function Header({ className }: THeader) {
  return (
    <header className={cn('h-16 px-8 py-3 bg-background fixed top-0 left-0 right-0 shadow-md shadow-slate-700/20 z-40', className)}>
      <div className='flex items-center justify-between'>
        <div className='flex gap-1 items-center'>
          <Link href={"/"} className='flex cursor-pointer items-center gap-2 mr-5'>
            <Image src='/main_icon.png' alt='logo' width={40} height={40} />
            <h1 className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-pretty font-bold text-cyan-600 dark:text-cyan-400 w-[70%] xs:w-auto'>
              Essay Platform for Essay Support Services
            </h1>
          </Link>
          <div className='flex gap-5'>
            <Link href={"/my-document"} target='_blank' className='cursor-pointer text-[15px] font-semibold'>Document của tôi</Link>
            <Link href={"/workshop"} target='_blank' className='cursor-pointer text-[15px] font-semibold'>Workshop</Link>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
