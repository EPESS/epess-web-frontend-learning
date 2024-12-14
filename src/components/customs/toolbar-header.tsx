import React from 'react'
import { Input } from '../ui/input'
import { DropdownMenuCheckboxes } from '../ui/dropdownMenuCheckboxes'
import { Button } from '../ui/button'
import { DOCUMENT, useGetDocument, useUpdateDocument } from '@/app/api/document'
import { toast } from 'react-toastify'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { Edit, Eye, RotateCcw } from 'lucide-react'
import UpdateDocumentDialog from '@/app/support/components/UpdateDocument'
import { Badge } from '../ui/badge'
import { useUser } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

type TToolbarHeader = {
    documentId: string
    handleEvent: (value: string) => void
    isSaveLoading?: boolean
}

const ToolbarHeader = ({ documentId, handleEvent, isSaveLoading }: TToolbarHeader) => {

    const { user } = useUser()

    const { loading, data } = useGetDocument(documentId)

    const [updateDocument, { loading: loadingUpdateDocument }] = useUpdateDocument()

    const permission = data?.document?.collaborators?.filter((collaborator) => collaborator.user.id === user?.id)

    const handleChangeName = (title: string) => {
        if (title === data?.document.name) return;
        if (loadingUpdateDocument) return;

        updateDocument({
            variables: {
                documentId: documentId ?? "",
                name: title
            },
            awaitRefetchQueries: true,
            refetchQueries: [DOCUMENT, "document"],
            onCompleted: () => {
                toast.success("Cập nhật tên thành công")
            },
            onError: (error) => {
                toast.error(error.message)
            }
        })
    }

    return (
        loading ? <ScaleLoader /> :
            <div className='flex ml-5 z-10 items-center gap-2 bg-white p-2 w-full'>
                {/* title */}
                <div className='flex flex-col'>
                    {/* File name input */}
                    <div className='flex items-center justify-center mt-1 gap-5'>
                        <div className='flex gap-5 items-center'>
                            <div className='flex items-end gap-2'>
                                <Input className='border-black' onBlur={(e) => handleChangeName(e.target.value)} type='text' defaultValue={data?.document?.name} placeholder='Untitled' />
                            </div>
                            <div>
                                <UpdateDocumentDialog documentId={documentId} />
                            </div>
                            <div className='flex items-center gap-1'>
                                <RotateCcw className={cn("w-4 h-4", isSaveLoading && "animate-spin	")} />
                                {isSaveLoading ? "Đang lưu" : "Đã lưu"}
                            </div>
                        </div>
                    </div>
                    {/* Menu bar */}
                    <div className='flex items-center gap-3 mt-2'>
                        <DropdownMenuCheckboxes
                            isOpenAfterClick={false}
                            buttonLabel={
                                <Button variant='ghost' className='px-0 h-6'>
                                    File
                                </Button>
                            }
                            handleOnChange={(value) => handleEvent(value as string)}
                            options={[
                                { label: "New", value: "new" },
                                { label: "Open", value: "open" },
                                { label: "Save", value: "save" },
                                { label: "Export", value: "export" }
                            ]}
                        />
                        <Button variant='ghost' className='px-0 h-6'>
                            Edit
                        </Button>
                        <Button variant='ghost' className='px-0 h-6'>
                            Help
                        </Button>

                        {permission && permission[0]?.writable
                            ?
                            <Badge variant={"destructive"}>
                                <Edit className='w-3 h-3' />
                                <span className='ml-2'>
                                    Chỉnh sửa
                                </span>
                            </Badge>
                            :
                            <Badge className='border-black' variant={"outline"}>
                                <Eye className='w-3 h-3' />
                                <span className='ml-2'>
                                    Chỉ đọc
                                </span>
                            </Badge>
                        }
                    </div>
                </div>
            </div>
    )
}

export default ToolbarHeader