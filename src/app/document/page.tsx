'use client';

import React from 'react';
import { Plus } from 'lucide-react'
import Card from './component/Card';
import { MYDOCUMENT, useAddCollaborator, useCreateSelfDocument, useGetMyDocuments } from '../api/document';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { toast } from 'react-toastify';


export default function DocumentList() {

  const { loading, data } = useGetMyDocuments()

  const myDocuments = data?.myDocuments

  const [createSelfDocument, { loading: createLoading }] = useCreateSelfDocument()

  const [addCollaborator, { loading: addLoading }] = useAddCollaborator()

  const createNewDocument = () => {
    if (createLoading || addLoading) return

    createSelfDocument({
      onCompleted: (data) => {
        addCollaborator({
          variables: {
            documentId: data.createDocument.id,
            userId: data.createDocument.ownerId
          },
          onError: () => {
            toast("Thêm người dùng lỗi")
          }
        })
      },
      awaitRefetchQueries: true,
      refetchQueries: [MYDOCUMENT, "myDocuments"]
    })
  }

  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      {/* Header */}

      {/* Body */}

      <div className="flex-grow px-28 py-4 overflow-y-auto no-scrollbar">
        {/* Template Gallery */}
        <div>
          {/* create new document and 4 recent documents */}
          <h2 className="mb-4 font-semibold text-lg">Tạo mới</h2>
          <div className='flex flex-wrap items-start'>
            <div onClick={createNewDocument} className="flex flex-col mr-10 items-center cursor-pointer">
              <div className="flex justify-center items-center bg-gray-200 w-40 h-52">
                <Plus className='w-10 h-10' />
              </div>
              <p className="mt-2 font-medium text-sm truncate">Tạo Document Trống</p>
            </div>
            <div className='flex gap-4'>
              {createLoading && <ScaleLoader />}
              {loading ? <ScaleLoader />
                :
                myDocuments ? myDocuments.slice(0, 6).map((document) => <Card classNameContainer='w-40' classNameCard='w-40 h-52' key={document.id} data={document} />) : <div>Không có tài liệu</div>
              }
            </div>
          </div>
        </div>

        {/* All Documents */}
        <div className="mt-8">
          <h2 className="mb-4 font-semibold text-lg">Tất cả các tài liệu</h2>
          {/* Example Document */}

          {loading ? <ScaleLoader />
            :
            <div className='flex gap-5 items-start'>
              {createLoading && <ScaleLoader />}
              <div className="gap-12 grid grid-cols-5">
                {
                  myDocuments ? myDocuments.map((document) => <Card key={document.id} data={document} />) : <div>Không có tài liệu</div>
                }
              </div>
            </div>
          }
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white shadow-md py-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 Essay Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
