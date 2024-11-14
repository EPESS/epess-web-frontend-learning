'use client';
import * as React from 'react';
import { MeetingClientImpl } from './components/MeetingClientImpl';
import { isVideoCodec } from '@/lib/types';
import Editor from './components/Editor';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { useStore } from '@/hooks/use-store';
import { ControlBar } from './components/ControlBar';

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
    <div className='flex w-full h-screen overflow-hidden'>
      {/* Slice 1 with dynamic width */}
      <div
        className={cn('transition-all duration-500 ease-in-out h-screen')}
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
          'h-screen flex flex-col relative transition-all duration-500 ease-in-out'
        )}
        style={{
          width: isMeetingAndChatOpen
            ? 'calc(1 / 3 * 100%)'
            : 'calc(1 / 25 * 100%)',
        }}
      >
        <Button
          className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full h-8 w-8 p-0'
          variant='outline'
          onClick={toggleMeetingAndChat}
        >
          {isMeetingAndChatOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </Button>

        <div className='flex-grow h-1/3'>
          <MeetingClientImpl
            roomName={'yh3f-xc67'}
            hq={hq}
            codec={codec}
            user={user}
          />
        </div>
        <div className='w-full h-2/3 flex-grow bg-blue-500'>
          Message
        </div>
      </div>
    </div>
  );
}
