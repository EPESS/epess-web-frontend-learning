import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DOCUMENT, useAddCollaborator, useEditCollaboratorPermission, useGetDocument, useRemoveCollaborator } from '@/app/api/document'
import { Plus, X } from 'lucide-react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { Input } from '@/components/ui/input'
import { useGetUsers } from '@/app/api/users'
import useClickOutSide from '@/hooks/click-outside'
import { toast } from 'react-toastify'
import { DropdownMenuCheckboxes } from '@/components/ui/dropdownMenuCheckboxes'
import { useUser } from '@clerk/nextjs'

type TUpdateDocument = {
    documentId: string
}

const UpdateDocumentDialog = ({ documentId }: TUpdateDocument) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { loading, data } = useGetDocument(documentId)

    const { user } = useUser()

    const [email, setEmail] = useState("")
    const [showListEmail, setShowListEmail] = useState(false)

    const [addCollaborator, { loading: loadingAddCollaborator }] = useAddCollaborator()

    const [editCollaborator, { loading: loadingEditCollaborator }] = useEditCollaboratorPermission()

    const [removeCollaborator, { loading: loadingRemoveCollaborator }] = useRemoveCollaborator()

    const { loading: loadingUsers, data: dataUsers } = useGetUsers(email)

    useClickOutSide(inputRef, () => {
        setShowListEmail(false)
    })

    const errorMappingLabel = (msg: string) => {
        switch (msg) {
            case "User is not owner of document":
                return "Bạn không có quyền chỉnh sửa tài liệu này"

            default:
                return "Lỗi vui lòng liên hệ nền tảng chúng tôi"
        }
    }

    const handleAddUserToDocument = (userId: string) => {
        if (loadingAddCollaborator || loadingRemoveCollaborator) return

        addCollaborator({
            variables: {
                documentId,
                userId: userId
            },
            awaitRefetchQueries: true,
            refetchQueries: [{ query: DOCUMENT, variables: { id: documentId } }],
            onCompleted: () => {
                toast.success("Thêm thành viên thành công !")
            },
            onError: (error) => {
                toast.error(`Lỗi thêm thành viên. Lý do: ${errorMappingLabel(error.message)}`)
            }

        })
    }

    const removeUserToDocument = (userId: string) => {
        if (loadingAddCollaborator || loadingRemoveCollaborator) return


        removeCollaborator({
            variables: {
                documentId,
                userId: userId
            },
            awaitRefetchQueries: true,
            refetchQueries: [{ query: DOCUMENT, variables: { id: documentId } }],
            onCompleted: () => {
                toast.success("Xoá thành viên thành công !")
            },
            onError: (error) => {
                toast.error(`Lỗi xoá thành viên. Lý do: ${errorMappingLabel(error.message)}`)
            }
        })
    }

    const editCollaboratorPermission = (permission: string | undefined, userId: string) => {
        if (loadingEditCollaborator) return;

        switch (permission) {
            case "edit":
                editCollaborator({
                    variables: {
                        documentId,
                        userId,
                        readable: true,
                        writable: true
                    },
                    awaitRefetchQueries: true,
                    refetchQueries: [{ query: DOCUMENT, variables: { id: documentId } }],
                    onCompleted: (data) => {
                        toast.success(`${data.editCollaboratorPermission.user.name} có quyền chỉnh sửa tài liệu`)
                    },
                },
                )
                break;
            case "readonly":
                editCollaborator({
                    variables: {
                        documentId,
                        userId,
                        readable: true,
                        writable: false
                    },
                    awaitRefetchQueries: true,
                    refetchQueries: [{ query: DOCUMENT, variables: { id: documentId } }],
                    onCompleted: (data) => {
                        toast.success(`${data.editCollaboratorPermission.user.name} chỉ có quyền đọc tài liệu`)
                    },
                })
                break;

            default:
                toast("Lỗi thay đổi quyền")
                break;
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"sm"}>
                    <Plus />
                    <span>Thêm người</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cập nhật thành viên</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <span>Chỉ có chủ sở hữu mới được chỉnh sửa !</span>
                    {data && user?.id === data.document?.owner.id && <p className='text-red-400'>Bạn có thể chỉnh sửa</p>}
                </DialogDescription>
                {
                    data && user?.id === data.document?.owner.id &&
                    <div className='flex gap-1 items-center'>
                        <div className='relative w-full'>
                            <Input onClick={() => setShowListEmail(true)} ref={inputRef} onChange={(e) => setEmail(e.target.value)} className='w-full' />
                            <div className='bg-white absolute h-auto max-h-52 overflow-y-auto top-12 min-w-[300px] left-0 right-0 rounded-md'>
                                <div className='flex flex-col gap-1'>
                                    {
                                        showListEmail ?
                                            loadingUsers ? <ScaleLoader /> : dataUsers?.users.map((user) => (
                                                <div onClick={() => handleAddUserToDocument(user.id)} key={user.id} className='flex cursor-pointer hover:bg-gray-200/50 justify-between items-center border border-gray-400/50 p-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='rounded-[50%] w-4 h-4'>
                                                            <img src={user.avatarUrl} alt={`Image-${user.id}`} />
                                                        </div>
                                                        <span className='text-[15px] font-semibold text-black'>{user.email}</span>
                                                    </div>
                                                    <div className='flex gap-1' >
                                                        <Plus className='w-5 h-5' />
                                                    </div>
                                                </div>
                                            )) : <></>
                                    }
                                </div>
                            </div>
                        </div>
                        <Button>Thêm thành viên</Button>
                    </div>
                }
                {
                    loading ?
                        <ScaleLoader />
                        :
                        <div className="flex flex-col gap-1">
                            <h1 className='font-bold text-[15px]'>Thành viên</h1>
                            {data?.document?.collaborators?.map((document) => (
                                <div key={document.documentId} className='flex justify-between items-center border border-gray-400/50 p-2'>
                                    <div className='flex items-center gap-3'>
                                        <div className='rounded-[50%] w-4 h-4'>
                                            <img src={document.user.avatarUrl} alt={`Image-${document.user.id}`} />
                                        </div>
                                        <span className='text-[15px] font-semibold text-black'>{document.user.name}</span>
                                    </div>
                                    {
                                        data.document.owner.id === document.user.id
                                            ?
                                            <span className='text-yellow-500'>Chủ sở hữu</span>
                                            :
                                            <div className='flex gap-1 items-center' >
                                                {user?.id !== data.document.owner.id ?
                                                    document.writable ?
                                                        <Button size={"sm"} variant={"outline"}>Chỉnh sửa</Button>
                                                        :
                                                        <Button size={"sm"} variant={"outline"}>Chỉ đọc</Button>
                                                    :
                                                    <DropdownMenuCheckboxes
                                                        isOpenAfterClick={false}
                                                        handleOnChange={(value) => editCollaboratorPermission(value?.toString(), document.user.id)}
                                                        defaultValue={document.writable ? "edit" : "readonly"}
                                                        options={[
                                                            { label: "Chỉnh sửa", value: "edit" },
                                                            { label: "Chỉ đọc", value: "readonly" },
                                                        ]}
                                                        buttonLabel={document.writable ?
                                                            <Button size={"sm"} variant={"outline"}>Chỉnh sửa</Button>
                                                            :
                                                            <Button size={"sm"} variant={"outline"}>Chỉ đọc</Button>}
                                                    />
                                                }
                                                {user?.id === data.document?.owner.id &&
                                                    <X onClick={() => removeUserToDocument(document.user.id)} className='cursor-pointer w-5 h-5' />
                                                }
                                            </div>
                                    }
                                </div>
                            ))}
                        </div>
                }
            </DialogContent>
        </Dialog>
    )
}

export default UpdateDocumentDialog