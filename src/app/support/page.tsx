'use client';
import * as React from 'react';
import { MeetingClientImpl } from './components/MeetingClientImpl';
import { isVideoCodec } from '@/lib/types';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { useStore } from '@/hooks/use-store';
import { ControlBar } from './components/ControlBar';
import dynamic from 'next/dynamic';
import ChatDetail from '@/components/customs/chat/chat-detail';

const Editor = dynamic(() => import("../support/components/Editor"))

export default function Component({
  searchParams = { hq: 'false', codec: 'vp9' },
}: {
  searchParams?: {
    hq?: string;
    codec?: string;
  };
}) {
  const isMeetingAndChatOpen = useStore(
    useToggleMeetingAndChat,
    (state) => state.isMeetingAndChatOpen
  );

  const { toggleMeetingAndChat } = useToggleMeetingAndChat();

  const codec =
    typeof searchParams.codec === 'string' && isVideoCodec(searchParams.codec)
      ? searchParams.codec
      : 'vp9';
  const hq = searchParams.hq === 'true';

  const { user, userLoading } = useMe();

  if (userLoading || !user) {
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

        <div className='z-30 flex-grow drop-shadow-sm pt-2 rounded-lg h-1/3'>
          <MeetingClientImpl
            roomName={'yh3f-xc67'}
            hq={hq}
            codec={codec}
            user={user}
          />
        </div>
        <div className='z-20 flex-grow bg-gray-50 drop-shadow-md rounded-lg w-full h-2/3'>
          <ChatDetail />
        </div>
      </div>
    </div>
  );
}
