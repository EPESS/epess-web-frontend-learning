'use client';

import { RecordingIndicator } from '@/lib/RecordingIndicator';
import { SettingsMenu } from '@/lib/SettingsMenu';
import { ConnectionDetails } from '@/lib/types';
import {
  CarouselLayout,
  ConnectionStateToast,
  GridLayout,
  isTrackReference,
  LayoutContextProvider,
  LiveKitRoom,
  LocalUserChoices,
  RoomAudioRenderer,
  TrackReferenceOrPlaceholder,
  useCreateLayoutContext,
  usePinnedTracks,
  useTracks,
} from '@livekit/components-react';
import {
  RoomOptions,
  VideoCodec,
  VideoPresets,
  Room,
  RoomConnectOptions,
  Track,
  RoomEvent,
  Participant,
  MediaDeviceFailure,
} from 'livekit-client';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ParticipantTile } from './ParticipantTile';
import { ControlBar } from './ControlBar';
import { FocusLayout, FocusLayoutContainer } from './FocusLayout';
import ReactLoading from 'react-loading';
import { useToggleMeetingAndChat } from '@/hooks/use-toggle-meeting-and-chat';
import { useStore } from '@/hooks/use-store';
import { cn } from '@/lib/utils';

declare const window: Window | undefined;
const CONN_DETAILS_ENDPOINT = '/api/connection-details';

function MeetingClientImplCpn(props: {
  loading?: boolean;
  roomName: string;
  hq: boolean; // high quality
  codec: VideoCodec;
  user: User;
}) {
  const [preJoinChoices, setPreJoinChoices] = useState<
    LocalUserChoices | undefined
  >(undefined);

  const [connectionDetails, setConnectionDetails] = useState<
    (ConnectionDetails & { participantAvatar: string }) | undefined
  >(undefined);

  const handlePreJoinSubmit = useCallback(
    async (values: LocalUserChoices) => {
      const url = new URL(CONN_DETAILS_ENDPOINT, window?.location.origin);
      url.searchParams.append('roomName', props.roomName);
      url.searchParams.append('participantName', values.username);
      const connectionDetailsResp = await fetch(url.toString());
      const connectionDetailsData = await connectionDetailsResp.json();
      setConnectionDetails(connectionDetailsData);
    },
    [props.roomName]
  );

  useEffect(() => {
    if (props.user) {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const hasMicrophone = devices.some(
            (device) => device.kind === 'audioinput'
          );
          const hasCamera = devices.some(
            (device) => device.kind === 'videoinput'
          );
          setPreJoinChoices({
            username: props.user.name.trim(),
            audioEnabled: hasMicrophone,
            videoEnabled: hasCamera,
            videoDeviceId:
              devices.find((device) => device.kind === 'videoinput')
                ?.deviceId || '',
            audioDeviceId:
              devices.find((device) => device.kind === 'audioinput')
                ?.deviceId || '',
          });
        })
        .catch((error) => {
          console.error('Error accessing media devices: ', error);
        });
    }
  }, [props.user]);

  useEffect(() => {
    if (preJoinChoices) {
      handlePreJoinSubmit(preJoinChoices);
    }
  }, [preJoinChoices, handlePreJoinSubmit]);

  const [isLoading, setIsLoading] = React.useState(props.loading);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (
    typeof window === 'undefined' ||
    isLoading ||
    !preJoinChoices ||
    !connectionDetails
  ) {
    return (
      <div className='flex justify-center items-center bg-zinc-900 w-full h-full'>
        <ReactLoading type='bars' />
      </div>
    );
  }

  return (
    <main data-lk-theme='default' style={{ height: '100%' }}>
      <VideoConferenceComponent
        connectionDetails={connectionDetails}
        userChoices={preJoinChoices}
        options={{ codec: props.codec, hq: props.hq }}
      />
    </main>
  );
}

export const MeetingClientImpl = React.memo(MeetingClientImplCpn);

function VideoConferenceComponent(props: {
  userChoices: LocalUserChoices;
  connectionDetails: ConnectionDetails & { participantAvatar: string };
  options: {
    hq: boolean;
    codec: VideoCodec;
  };
}) {
  const [isConnecting, setIsConnecting] = React.useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    //check for media devices permission
    isMediaDevicePermissionGranted().then((granted) => {
      setIsConnecting(granted);
    });
  }, []);

  const roomOptions = React.useMemo((): RoomOptions => {
    let videoCodec: VideoCodec | undefined = props.options.codec
      ? props.options.codec
      : 'vp9';

    return {
      videoCaptureDefaults: {
        deviceId: props.userChoices.videoDeviceId ?? undefined,
        resolution: props.options.hq ? VideoPresets.h2160 : VideoPresets.h720,
      },
      publishDefaults: {
        dtx: false,
        videoSimulcastLayers: props.options.hq
          ? [VideoPresets.h1080, VideoPresets.h720]
          : [VideoPresets.h540, VideoPresets.h216],

        videoCodec,
      },
      audioCaptureDefaults: {
        deviceId: props.userChoices.audioDeviceId ?? undefined,
        echoCancellation: true,
      },
      adaptiveStream: { pixelDensity: 'screen' },
      dynacast: true,
    };
  }, [props.options, props.userChoices]);

  const room = React.useMemo(() => new Room(roomOptions), [roomOptions]);

  const connectOptions = React.useMemo((): RoomConnectOptions => {
    return {
      autoSubscribe: true,
    };
  }, []);

  const router = useRouter();
  const handleOnLeave = React.useCallback(() => router.push('/'), [router]);
  const handleError = React.useCallback((e: Error) => {
    if (e.message === 'Requested device not found') {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const hasMicrophone = devices.some(
          (device) => device.kind === 'audioinput'
        );
        const hasCamera = devices.some(
          (device) => device.kind === 'videoinput'
        );
        toast.error(
          `Thiết bị ${hasMicrophone ? '' : 'microphone'} ${
            hasCamera ? '' : 'camera'
          } không tồn tại`,
          {
            theme: 'colored',
          }
        );
      });
      console.error(e);
      return;
    }
    if (e.name === 'NotAllowedError' && e.message === 'Permission denied') {
      // ask user to allow access to microphone and camera
    }
    console.error(e);
  }, []);

  const handleMediaDeviceFailure = React.useCallback(
    (failure?: MediaDeviceFailure) => {
      console.log(failure);
    },
    []
  );

  const isMeetingAndChatOpen = useStore(
    useToggleMeetingAndChat,
    (state) => state.isMeetingAndChatOpen
  );

  if (isConnecting === undefined) {
    return null;
  }

  if (!isConnecting) {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      let hasMicrophone = devices.some(
        (device) => device.kind === 'audioinput'
      );
      let hasCamera = devices.some((device) => device.kind === 'videoinput');
      navigator.mediaDevices
        .getUserMedia({ video: hasCamera, audio: hasMicrophone })
        .then(() => {
          isMediaDevicePermissionGranted().then((granted) => {
            setIsConnecting(granted);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  return (
    <>
      <LiveKitRoom
        connect={isConnecting}
        room={room}
        token={props.connectionDetails.participantToken}
        serverUrl={props.connectionDetails.serverUrl}
        connectOptions={connectOptions}
        video={props.userChoices.videoEnabled}
        audio={props.userChoices.audioEnabled}
        onDisconnected={handleOnLeave}
        onError={handleError}
        onMediaDeviceFailure={handleMediaDeviceFailure}
        className='flex flex-col justify-center items-center bg-white shadow-lg rounded-lg w-full h-full'
      >
        <VideoConference
          SettingsComponent={SettingsMenu}
          className={cn(!isMeetingAndChatOpen && '!hidden')}
        />

        <RecordingIndicator />

        {!isMeetingAndChatOpen && (
          <ControlBar
            className='flex flex-col gap-5 m-0 p-0 !border-none'
            vertical={true}
          />
        )}
      </LiveKitRoom>
    </>
  );
}

export type WidgetState = {
  showSettings?: boolean;
};

const VideoConference = ({
  // eslint-disable-next-line
  SettingsComponent,
  className,
  ...props
}: {
  SettingsComponent: React.FC | undefined;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const lastAutoFocusedScreenShareTrack =
    React.useRef<TrackReferenceOrPlaceholder | null>(null);

  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { updateOnlyOn: [RoomEvent.ActiveSpeakersChanged], onlySubscribed: false }
  );

  const layoutContext = useCreateLayoutContext();

  const screenShareTracks = tracks
    .filter(isTrackReference)
    .filter((track) => track.publication.source === Track.Source.ScreenShare);

  const focusTrack = usePinnedTracks(layoutContext)?.[0];
  const carouselTracks = tracks.filter(
    (track) => !isEqualTrackRef(track, focusTrack)
  );

  React.useEffect(() => {
    // If screen share tracks are published, and no pin is set explicitly, auto set the screen share.
    if (
      screenShareTracks.some((track) => track.publication.isSubscribed) &&
      lastAutoFocusedScreenShareTrack.current === null
    ) {
      layoutContext.pin.dispatch?.({
        msg: 'set_pin',
        trackReference: screenShareTracks[0],
      });
      lastAutoFocusedScreenShareTrack.current = screenShareTracks[0];
    } else if (
      lastAutoFocusedScreenShareTrack.current &&
      !screenShareTracks.some(
        (track) =>
          track.publication.trackSid ===
          lastAutoFocusedScreenShareTrack.current?.publication?.trackSid
      )
    ) {
      layoutContext.pin.dispatch?.({ msg: 'clear_pin' });
      lastAutoFocusedScreenShareTrack.current = null;
    }
    if (focusTrack && !isTrackReference(focusTrack)) {
      const updatedFocusTrack = tracks.find(
        (tr) =>
          tr.participant.identity === focusTrack.participant.identity &&
          tr.source === focusTrack.source
      );
      if (
        updatedFocusTrack !== focusTrack &&
        isTrackReference(updatedFocusTrack)
      ) {
        layoutContext.pin.dispatch?.({
          msg: 'set_pin',
          trackReference: updatedFocusTrack,
        });
      }
    }
  }, [
    focusTrack,
    focusTrack?.publication?.trackSid,
    layoutContext.pin,
    screenShareTracks,
    tracks,
  ]);

  return (
    <div
      className={cn(
        'bg-white rounded-lg !w-full lk-video-conference',
        className
      )}
      {...props}
    >
      {isWeb() && (
        <LayoutContextProvider value={layoutContext}>
          <div
            className={cn('flex flex-row bg-white lk-video-conference-inner')}
          >
            <div className='bg-gray-50 drop-shadow-sm rounded-lg w-full'>
              {!focusTrack ? (
                <div className='lk-grid-layout-wrapper'>
                  <GridLayout tracks={tracks}>
                    <ParticipantTile />
                  </GridLayout>
                </div>
              ) : (
                <div className='bg-white lk-focus-layout-wrapper'>
                  <FocusLayoutContainer>
                    <CarouselLayout tracks={carouselTracks}>
                      <ParticipantTile />
                    </CarouselLayout>
                    {focusTrack && <FocusLayout trackRef={focusTrack} />}
                  </FocusLayoutContainer>
                </div>
              )}
              <ControlBar />
            </div>
          </div>
        </LayoutContextProvider>
      )}
      <RoomAudioRenderer />
      <ConnectionStateToast />
    </div>
  );
};

function isWeb(): boolean {
  return typeof document !== 'undefined';
}

function isEqualTrackRef(
  a?: TrackReferenceOrPlaceholder,
  b?: TrackReferenceOrPlaceholder
): boolean {
  if (a === undefined || b === undefined) {
    return false;
  }
  if (isTrackReference(a) && isTrackReference(b)) {
    return a.publication.trackSid === b.publication.trackSid;
  } else {
    return getTrackReferenceId(a) === getTrackReferenceId(b);
  }
}

function getTrackReferenceId(
  trackReference: TrackReferenceOrPlaceholder | number
) {
  if (
    typeof trackReference === 'string' ||
    typeof trackReference === 'number'
  ) {
    return `${trackReference}`;
  } else if (isTrackReferencePlaceholder(trackReference)) {
    return `${trackReference.participant.identity}_${trackReference.source}_placeholder`;
  } else if (isTrackReference(trackReference)) {
    return `${trackReference.participant.identity}_${trackReference.publication.source}_${trackReference.publication.trackSid}`;
  } else {
    throw new Error(
      `Can't generate a id for the given track reference: ${trackReference}`
    );
  }
}

type TrackReferencePlaceholder = {
  participant: Participant;
  publication?: never;
  source: Track.Source;
};

export function isTrackReferencePlaceholder(
  trackReference?: TrackReferenceOrPlaceholder
): trackReference is TrackReferencePlaceholder {
  if (!trackReference) {
    return false;
  }
  return (
    trackReference.hasOwnProperty('participant') &&
    trackReference.hasOwnProperty('source') &&
    typeof trackReference.publication === 'undefined'
  );
}

async function isMediaDevicePermissionGranted() {
  return navigator.mediaDevices.enumerateDevices().then((devices) => {
    return devices.some(
      (device) =>
        (device.kind === 'audioinput' || device.kind === 'videoinput') &&
        !!device.label &&
        !!device.deviceId &&
        !!device.groupId
    );
  });
}
