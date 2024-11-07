import Image from 'next/image';
import React from 'react';
import { UserNav } from './user-nav';

export default function Header() {
  return (
    <header className='h-16 flex items-center justify-between px-8 py-3 bg-background fixed top-0 left-0 right-0 shadow-md shadow-slate-700/20 z-50'>
      <div className='flex items-center gap-2'>
        <Image src='/main_icon.png' alt='logo' width={40} height={40} />
        <h1 className='text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-pretty font-bold text-cyan-600 dark:text-cyan-400 w-[70%] xs:w-auto'>
          Essay Platform for Essay Support Services
        </h1>
      </div>
      <div className='flex items-center gap-2'>
        <UserNav />
      </div>
    </header>
  );
}
