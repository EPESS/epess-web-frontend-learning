'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MYDOCUMENT, TDocument, useUpdateDocument } from "@/app/api/document";
import { cn, getVNTime } from "@/lib/utils";
import { toast } from "react-toastify";
import Link from "next/link";

type TCard = {
  data: TDocument
  classNameCard?: string
  classNameContainer?: string
}

export default function Card({ data, classNameCard, classNameContainer }: TCard) {
  const [isEditing, setIsEditing] = useState(false);

  const [updateDocument, { loading: updateLoading }] = useUpdateDocument()

  const handleUpdateDocument = (name: string) => {
    if (updateLoading) return

    if (data.name === name) {
      setIsEditing(false);
      return
    }

    updateDocument({
      variables: {
        name,
        documentId: data.id
      },
      awaitRefetchQueries: true,
      refetchQueries: [MYDOCUMENT, "myDocuments"],
      onCompleted: () => {
        toast.success("Cập nhật tên thành công")
        setIsEditing(false);
      },
      onError: () => {
        toast.success("Cập nhật tên thất bại")
        setIsEditing(false);
      }
    })
  }

  return (
    <Link href={`/my-document/${data.id}`} target="_blank" className={cn("max-w-56 cursor-pointer", classNameContainer)}>
      <div className={cn("bg-slate-200 shadow-sm border w-56 h-64", classNameCard)}>
        {/* documentImage */}
      </div>

      <div className="flex w-full">
        <div className="flex justify-between w-full">
          <div className="w-full">
            {isEditing ? (
              <Input
                type="text"
                className="bg-white mt-2 px-1 border rounded w-full font-medium text-sm"
                defaultValue={data.name}
                onBlur={(e) => {
                  handleUpdateDocument(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // TODO: Send update to DB
                    handleUpdateDocument(e.currentTarget.value)
                  }
                }}
                autoFocus
              />
            ) : (
              <div className="mt-2 flex gap-1 justify-between items-center">
                <p className="truncate font-medium text-sm">{data.name}</p>
                <div>
                  {/* dropdown menu for actions */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button onClick={(e) => e.stopPropagation()} variant="ghost" size="icon" className="-mt-1 w-8 h-8">
                        <MoreHorizontalIcon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setIsEditing(true)}>
                        <PencilIcon className="mr-2 w-4 h-4" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2Icon className="mr-2 w-4 h-4" />
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ExternalLinkIcon className="mr-2 w-4 h-4" />
                        Open
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}
            <p className="mt-1 text-gray-500 text-xs">Cập nhật: {getVNTime(data.updatedAt)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
