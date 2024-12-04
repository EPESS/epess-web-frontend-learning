import * as React from 'react';
import {
  ChatCloseIcon,
  ChatToggle,
  useMaybeLayoutContext,
} from '@livekit/components-react';
import { Button } from '@/components/ui/button';
import ChatDetail from '@/components/customs/chat/chat-detail';

export function Chat({ ...props }) {
  const ulRef = React.useRef<HTMLUListElement>(null);

  const layoutContext = useMaybeLayoutContext();


  React.useEffect(() => {
    if (ulRef) {
      ulRef.current?.scrollTo({ top: ulRef.current.scrollHeight });
    }
  }, [ulRef]);

  React.useEffect(() => {
    if (!layoutContext) {
      return;
    }

    if (layoutContext.widget.state?.showChat) {
      return;
    }
  }, [layoutContext]);

  return (
    <div {...props} className='lk-chat'>
      <ChatHeader />
      <ChatDetail containerClassName="h-[90%]" roomId="89accd85-d454-4d37-b4d4-91948b500090" />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className='lk-chat-header bg-black static justify-between'>
      <p className='text-xl font-bold text-zinc-300'>Tin nhắn</p>
      <Button variant='secondary' asChild>
        <ChatToggle className='lk-close-button static !bg-[var(--lk-control-active-hover-bg)]'>
          <ChatCloseIcon />
        </ChatToggle>
      </Button>
    </div>
  );
}

