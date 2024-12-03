'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import { EJoinRoomErrorCode, useJoinRoom } from './api/support-room';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { toast } from 'react-toastify';
import { LEARNING_URL } from '@/lib/utils';

export default function Page() {
  const { userLoading } = useMe();

  const params = useSearchParams()

  const scheduleDateIdParam = params.get("scheduleDateId") ?? ''

  const [scheduleDateId, setScheduleDateId] = useState(scheduleDateIdParam)
  const [scheduleDateIdErr, setScheduleDateIdErr] = useState("")

  const router = useRouter()

  const [joinRoom, { loading }] = useJoinRoom()

  if (userLoading) {
    return <Loading />;
  }

  const mappingJoinRoomErrorLabel = (error: string) => {
    switch (error) {
      case EJoinRoomErrorCode.MentorSessionNotCreated:
        return "Vui lòng liên hệ giảng viên để bắt đầu buổi học"
      case EJoinRoomErrorCode.ScheduleDateNotFound:
        return "Không có lớp học này vui lòng liên hệ lại giảng viên"
      case EJoinRoomErrorCode.UserNotAllowed:
        return "Bạn không thể gia nhập lớp học này"
      case EJoinRoomErrorCode.CollaborationNotTime:
        return "Chưa tới giờ hoặc đã kết thúc buổi học. Vui lòng liên hệ giảng viên để biết thêm chi tiết"

      default:
        "Hệ thống lỗi"
        break;
    }
  }

  const handleJoinRoom = () => {
    if (!scheduleDateId) {
      setScheduleDateIdErr("Vui lòng nhập mã phòng")
      return;
    }

    joinRoom({
      variables: { scheduleDateId },
      onCompleted: (data) => {
        if (data) {
          const collaborationSessionId = data.collaborationSession.id
          if (collaborationSessionId) {
            router.push(`${LEARNING_URL}/support?scheduleDateId=${scheduleDateId}`)
            toast.success("Vào phòng thành công")
            setScheduleDateIdErr("")
          }
        }
      },
      onError: (error) => {
        toast.warning(mappingJoinRoomErrorLabel(error.message))
      },
    })
  }

  return (

    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col gap-5 items-center min-w-[400px] justify-center bg-gray-200 w-fit p-16 rounded-lg'>
          <div className='w-[200px] h-[200px]'>
            <img src='/main_icon.png' alt='Logo' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Input className='border border-black' required defaultValue={scheduleDateId} onChange={(e) => setScheduleDateId(e.target.value)} name='supportRoomID' type='text' />
            {scheduleDateIdErr &&
              <span className='text-red-500'>
                {scheduleDateIdErr}
              </span>
            }
            {
              loading
                ?
                <div className='flex gap-1 items-center mt-5'>
                  <span>Vui lòng đợi giây lát</span>
                  <ScaleLoader width={10} height={10} />
                </div>
                :
                <Button disabled={loading} className='mt-5' onClick={handleJoinRoom} type='button'>Vào phòng</Button>
            }

          </div>
        </div>
      </div>
    </>
  );
}
