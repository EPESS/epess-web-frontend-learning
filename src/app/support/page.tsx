'use client';
import * as React from 'react';
import { MeetingClientImpl } from './components/MeetingClientImpl';
import { isVideoCodec } from '@/lib/types';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { useStore } from '@/hooks/use-store';
import dynamic from 'next/dynamic';
import ChatDetail from '@/components/customs/chat/chat-detail';
import { useSearchParams } from 'next/navigation';
import { useJoinRoomQuery } from '../api/support-room';
import { useGetMeetingRoom } from '../api/meeting-room';

const Editor = dynamic(() => import("../support/components/Editor"))

export default function Component({
  searchParams = { hq: 'false', codec: 'vp9' },
}: {
  searchParams?: {
    hq?: string;
    codec?: string;
  };
}) {
  const params = useSearchParams()

  const scheduleDateIdParam = params.get("scheduleDateId") ?? ''

  const isMeetingAndChatOpen = useStore(
    useToggleMeetingAndChat,
    (state) => state.isMeetingAndChatOpen
  );

  const codec =
    typeof searchParams.codec === 'string' && isVideoCodec(searchParams.codec)
      ? searchParams.codec
      : 'vp9';
  const hq = searchParams.hq === 'true';

  const { toggleMeetingAndChat } = useToggleMeetingAndChat();

  const { user, userLoading } = useMe();

  const { loading: roomLoading, data } = useJoinRoomQuery(scheduleDateIdParam)

  const [joinMeetingRoom, { loading: meetingRoomLoading, data: meeting }] = useGetMeetingRoom(scheduleDateIdParam)

  const meetingCollaborationSession = meeting?.meetingRoom

  const collaborationSession = data?.collaborationSession

  if (userLoading || roomLoading || !user) {
    return <Loading />;
  }

  return (
    <div className='flex gap-5 w-full h-screen overflow-hidden'>
      {/* Slice 1 with dynamic width */}
      <div
        className={cn('transition-all duration-1000 ease-in-out h-screen')}
        style={{
          // con lạy cụ tỷ lệ vàng
          width: isMeetingAndChatOpen
            ? 'calc(2 / 3 * 100%)'
            : 'calc(24 / 25 * 100%)',
        }}
      >
        <Editor />
      </div>

      {/* Slice 2 with dynamic width */}
      <div
        className={cn(
          'h-screen gap-5 flex flex-col relative z-10 transition-all duration-1000 ease-in-out'
        )}
        style={{
          width: isMeetingAndChatOpen
            ? 'calc(1 / 3 * 100%)'
            : 'calc(1 / 25 * 100%)',
        }}
      >
        <Button
          className='top-1/2 left-0 z-40 absolute p-0 rounded-full w-10 h-10 -translate-x-1/2 -translate-y-1/2'
          variant='outline'
          onClick={toggleMeetingAndChat}
        >
          <ChevronLeftIcon className={cn(
            "transition-transform duration-1000",
            isMeetingAndChatOpen ? "rotate-180" : ""
          )} />
        </Button>

        <div className={cn('z-30 relative flex-grow drop-shadow-sm pt-2 rounded-lg h-1/3 m-1', !meetingCollaborationSession && "border-black border")} >
          {
            !meetingCollaborationSession ?
              <Button onClick={() => joinMeetingRoom()} variant={"outline"} className='absolute border-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Kết nối</Button>
              :
              <MeetingClientImpl
                loading={meetingRoomLoading}
                roomName={meetingCollaborationSession.id}
                hq={hq}
                codec={codec}
                user={user}
              />
          }
        </div>
        <div className='z-20 flex-grow bg-gray-50 drop-shadow-md rounded-lg w-full h-2/3'>
          <ChatDetail roomId={collaborationSession?.chatRoomId} />
        </div>
      </div>
    </div>
  );
}
