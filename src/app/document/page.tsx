'use client';

import React from 'react';
import { Plus } from 'lucide-react'

import { Input } from '@/components/ui/input';
import Card from './component/Card';
import CardTemplate from './component/CardTemplate';


export default function DocumentList() {
  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow-md px-6 py-4">
        {/* Logo and Search */}
        <div className="flex items-center gap-4">
          <img src="https://objects.epess.org/epess-public/main_icon.png" alt="Logo" className="w-12 h-12" />

        </div>
        {/* width 630px height 46px */}
        <div className='w-[630px]'>
          <Input placeholder="Tìm kiếm" className="border-gray-300 rounded-full h-[46px]" />
        </div>
        {/* Avatar */}
        <div>
          <img src="https://objects.epess.org/epess-public/main_icon.png" alt="Avatar" className="rounded-full w-12 h-12" />
        </div>
      </div>

      {/* Body */}

      <div className="flex-grow px-28 py-4 overflow-y-auto no-scrollbar">
        {/* Template Gallery */}
        <div>
          {/* create new document and 4 recent documents */}
          <h2 className="mb-4 font-semibold text-lg">Tạo mới</h2>
          <div className='flex flex-wrap justify-between'>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="flex justify-center items-center bg-gray-200 w-40 h-52">
                <Plus className='w-10 h-10' />
              </div>
              <p className="mt-2 font-medium text-sm truncate">Tạo Document Trống</p>
            </div>
            <CardTemplate /><CardTemplate /><CardTemplate /><CardTemplate /><CardTemplate /><CardTemplate />
          </div>
        </div>

        {/* All Documents */}
        <div className="mt-8">
          <h2 className="mb-4 font-semibold text-lg">Tất cả các tài liệu</h2>
          <div className="gap-12 grid grid-cols-5">
            {/* Example Document */}
            <Card />
 

            {/* Add more document items */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white shadow-md py-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 Essay Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
