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

  const visibleWidth = '73.6px';

  return (
    <div
      className='flex h-screen overflow-hidden'
      style={{ '--visible-width': visibleWidth } as React.CSSProperties}
    >
      <div
        className={cn(
          'transition-all duration-300 ease-in-out h-screen',
          isMeetingAndChatOpen ? 'w-2/3' : 'w-[calc(100%-var(--visible-width))]'
        )}
      >
        <Editor />
      </div>
      <div
        className={cn(
          'w-1/3 flex flex-col relative transition-all duration-300 ease-in-out',
          isMeetingAndChatOpen
            ? ''
            : 'translate-x-[calc(100%-var(--visible-width))]'
        )}
      >
        <Button
          className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10'
          variant='outline'
          onClick={toggleMeetingAndChat}
        >
          {isMeetingAndChatOpen ? (
            <ChevronRightIcon className='w-4 h-4' />
          ) : (
            <ChevronLeftIcon className='w-4 h-4' />
          )}
        </Button>
        <div className='flex-grow'>
          <MeetingClientImpl
            roomName={'yh3f-xc67'}
            hq={hq}
            codec={codec}
            user={user}
          />
        </div>
        <div className='flex-grow bg-blue-500'></div>
      </div>
    </div>
  );
}
