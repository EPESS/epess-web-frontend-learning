import * as React from 'react';
import {
  ChatCloseIcon,
  ChatToggle,
  useMaybeLayoutContext,
} from '@livekit/components-react';
import { Button } from '@/components/ui/button';
import { EmojiPicker } from '@/components/customs/emoji-picker';
import { Paperclip, SendHorizontal } from 'lucide-react';

export function Chat({ ...props }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);

  const [isSending, _setIsSending] = React.useState(false);

  const layoutContext = useMaybeLayoutContext();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== '') {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

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

      <ul className='lk-list lk-chat-messages' ref={ulRef}></ul>

      <ChatBottomBar
        handleSubmit={handleSubmit}
        isSending={isSending}
        inputRef={inputRef}
      />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className='lk-chat-header bg-primary-foreground static justify-between'>
      <p className='text-xl font-bold text-zinc-500'>Tin nhắn</p>
      <Button variant='secondary' asChild>
        <ChatToggle className='lk-close-button static !bg-[var(--lk-control-active-hover-bg)]'>
          <ChatCloseIcon />
        </ChatToggle>
      </Button>
    </div>
  );
}

function ChatBottomBar({
  handleSubmit,
  isSending,
  inputRef,
}: {
  handleSubmit: (event: React.FormEvent) => void;
  isSending: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  return (
    <form className='lk-chat-form gap-2 p-1 !py-2' onSubmit={handleSubmit}>
      <button className=''>
        <Paperclip
          size={20}
          className='lucide lucide-smile h-5 w-5 text-muted-foreground hover:text-foreground transition'
        />
      </button>
      <EmojiPicker
        onChange={(value) => {
          if (inputRef.current) {
            inputRef.current.value += value;
            inputRef.current.focus();
          }
        }}
      />
      <input
        className='lk-form-control lk-chat-form-input'
        disabled={isSending}
        ref={inputRef}
        type='text'
        placeholder='Nhập tin nhắn...'
        onInput={(ev) => ev.stopPropagation()}
        onKeyDown={(ev) => ev.stopPropagation()}
        onKeyUp={(ev) => ev.stopPropagation()}
      />
      <button
        type='submit'
        className='lk-button lk-chat-form-button !bg-[var(--lk-control-hover-bg)]'
        disabled={isSending}
      >
        <SendHorizontal width={20} height={20} />
      </button>
    </form>
  );
}
