'use client';

import * as React from 'react';
import {
  MeetingClientImpl,
  TConnectionDetailsDTO,
} from './components/MeetingClientImpl';
import { isVideoCodec } from '@/lib/types';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, SquarePlay, X } from 'lucide-react';
import { cn, LEARNING_URL } from '@/lib/utils';
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { useStore } from '@/hooks/use-store';
import dynamic from 'next/dynamic';
import ChatDetail from '@/components/customs/chat/chat-detail';
import { useRouter, useSearchParams } from 'next/navigation';
import { JOINROOM, useJoinRoomQuery } from '../api/support-room';
import { toast } from 'react-toastify';
import {
  TCollaborationSessionUpdated,
  useGetCollaborationSessionUpdated,
} from '../api/support-room/collaborationSessionUpdated';
import { useAuth } from '@clerk/nextjs';
import {
  useAddCollaborator,
  useCreateDocument,
  useUpdateActiveDocumentId,
} from '../api/document';
import { useGetMeetingRoomJoinInfo } from '../api/connection-details';

const Editor = dynamic(() => import('../support/components/Editor'));

// Create a wrapper component to handle the search params
const SupportPageContent = ({
  searchParams = { hq: 'false', codec: 'vp9' },
}: {
  searchParams?: {
    hq?: string;
    codec?: string;
  };
}) => {
  const [isNewFile, setIsNewFile] = React.useState(false);

  const params = useSearchParams();

  const router = useRouter();

  const scheduleDateIdParam = params.get('scheduleDateId') ?? '';

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

  const { userId, sessionId } = useAuth();

  const {
    loading: roomLoading,
    data: dataCollaboration,
    refetch,
  } = useJoinRoomQuery(scheduleDateIdParam);

  const [
    getMeetingRoomJoinInfo,
    { loading: loadingRoomInfo, data: dataRoomInfo },
  ] = useGetMeetingRoomJoinInfo(
    dataCollaboration?.collaborationSession.id ?? ''
  );

  const [updateActiveDocument, { loading: loadingUpdateActiveDocument }] =
    useUpdateActiveDocumentId();

  const [addCollaborator] = useAddCollaborator();

  const [createDocument, { loading: loadingNewFile }] = useCreateDocument(
    dataCollaboration?.collaborationSession.id ?? ''
  );

  const collaborationSession = dataCollaboration?.collaborationSession;

  React.useEffect(() => {
    if (
      !dataCollaboration &&
      !roomLoading &&
      !collaborationSession?.collaboratorsIds.includes(user?.id ?? '')
    ) {
      router.push(LEARNING_URL);
      toast.warning('Lớp học không tồn tại vui lòng liên hệ lại giảng viên !');
    }
  }, [roomLoading, collaborationSession, dataCollaboration, router, user?.id]);

  const handleNewFile = async () => {
    if (loadingNewFile) return;
    if (loadingUpdateActiveDocument) return;
    const dataCreateDocument = await createDocument({
      onCompleted: (data) => {
        updateActiveDocument({
          variables: {
            activeDocumentId: data.createDocument.id,
            collaborationSessionId:
              dataCollaboration?.collaborationSession.id ?? '',
          },
          awaitRefetchQueries: true,
          refetchQueries: [
            {
              query: JOINROOM,
              variables: { scheduleDateId: scheduleDateIdParam },
            },
          ],
          onCompleted: () => {
            toast.success('Tạo file thành công');
          },
          onError: (error) => {
            toast.error(error.message);
          },
        });
      },
    });

    if (dataCreateDocument.data?.createDocument) {
      addCollaborator({
        variables: {
          documentId: dataCreateDocument.data.createDocument.id,
          userId: userId ?? '',
        },
        onError() {
          toast.error(`Không thể thêm bạn vào tài liệu`);
        },
      });
    }
  };

  const handleNewFileSubscription = React.useCallback((data: TCollaborationSessionUpdated) => {
    if (
      data &&
      data.collaborationSessionUpdated.activeDocument.owner.id !== userId
    ) {
      setIsNewFile(true);
    }
  }, [userId]);

  const handleLoadNewFile = () => {
    setIsNewFile(false);
    refetch();
  };

  const handleFileEvent = (value: string) => {
    switch (value) {
      case 'new': {
        handleNewFile();
        break;
      }
      case 'open': {
        break;
      }
      case 'save': {
        break;
      }
      case 'export': {
        break;
      }

      default:
        break;
    }
  };

  React.useEffect(() => {
    useGetCollaborationSessionUpdated(
      sessionId,
      dataCollaboration?.collaborationSession.id,
      handleNewFileSubscription
    );
  }, [
    roomLoading,
    sessionId,
    dataCollaboration?.collaborationSession.id,
    handleNewFileSubscription,
  ]);

  const connectionDetail = React.useMemo(() => {
    return {
      participantAvatar: user?.avatarUrl,
      participantName: user?.name,
      participantToken: dataRoomInfo?.meetingRoomJoinInfo.token,
      roomName: dataRoomInfo?.meetingRoomJoinInfo.id,
      serverUrl: dataRoomInfo?.meetingRoomJoinInfo.serverUrl,
    };
  }, [dataRoomInfo, user?.avatarUrl, user?.name]);

  if (userLoading || roomLoading || !user) {
    return <Loading />;
  }

  return (
    <div className='flex gap-5 w-full'>
      {/* Slice 1 with dynamic width */}
      <div
        className={cn('relative transition-all duration-1000 ease-in-out')}
        style={{
          width: isMeetingAndChatOpen
            ? 'calc(2 / 3 * 100%)'
            : 'calc(24 / 25 * 100%)',
        }}
      >
        {isNewFile && (
          <div className='absolute bottom-5 right-5 bg-gray-100 border-black border z-10 p-5'>
            <X
              onClick={() => setIsNewFile(false)}
              className='absolute cursor-pointer top-2 right-2 w-3 h-3'
            />
            <div className='mt-1'>
              <p>File này hiện có thay đổi bạn có muốn thay đổi không ?</p>
              <div>
                <Button
                  onClick={handleLoadNewFile}
                  variant={'outline'}
                  className='mt-2'
                  size={'sm'}
                >
                  Tải lại trang
                </Button>
              </div>
            </div>
          </div>
        )}
        <Editor
          handleFileEvent={handleFileEvent}
          key={dataCollaboration?.collaborationSession.activeDocumentId}
          documentId={
            dataCollaboration?.collaborationSession.activeDocumentId ?? ''
          }
        />
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
          <ChevronLeftIcon
            className={cn(
              'transition-transform duration-1000',
              isMeetingAndChatOpen ? 'rotate-180' : ''
            )}
          />
        </Button>

        <div
          className={cn(
            'z-30 relative flex-grow drop-shadow-sm pt-2 rounded-lg h-1/3 m-1',
            !dataRoomInfo && 'border-black border'
          )}
        >
          {!dataRoomInfo ? (
            isMeetingAndChatOpen ? (
              <Button
                onClick={() => getMeetingRoomJoinInfo()}
                variant={'outline'}
                className='absolute border-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              >
                Kết nối
              </Button>
            ) : (
              <SquarePlay
                strokeWidth={1}
                className='absolute border-black top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2'
              />
            )
          ) : (
            user && (
              <MeetingClientImpl
                connectionDetail={connectionDetail as TConnectionDetailsDTO}
                loading={loadingRoomInfo}
                roomName={dataRoomInfo?.meetingRoomJoinInfo.id ?? '123'}
                hq={hq}
                codec={codec}
                user={user}
              />
            )
          )}
        </div>
        <div className='z-20 flex-grow bg-gray-50 drop-shadow-md rounded-lg w-full h-2/3'>
          <ChatDetail roomId={collaborationSession?.chatRoomId} />
        </div>
      </div>
    </div>
  );
};

// Wrap the content in Suspense
export default function Page({
  searchParams = { hq: 'false', codec: 'vp9' },
}: {
  searchParams?: {
    hq?: string;
    codec?: string;
  };
}) {
  return (
    <React.Suspense fallback={<Loading />}>
      <SupportPageContent searchParams={searchParams} />
    </React.Suspense>
  );
}
