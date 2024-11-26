'use client';

import Header from '@/components/customs/header';
import Loading from '@/components/customs/loading';
import { useMe } from '@/hooks/use-me';
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
} from 'livekit-client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ParticipantTile } from './ParticipantTile';
import { PreJoin } from './PreJoin';
import { ControlBar } from './ControlBar';
import { Chat } from './Chat';
import { FocusLayout, FocusLayoutContainer } from './FocusLayout';

declare const window: Window | undefined;
const CONN_DETAILS_ENDPOINT = '/api/connection-details';

export function PageClientImpl(props: {
  roomIdData: string;
  hq: boolean;
  codec: VideoCodec;
}) {
  const { user, userLoading } = useMe();

  const [preJoinChoices, setPreJoinChoices] = React.useState<
    LocalUserChoices | undefined
  >(undefined);

  const [preJoinDefaults, setPreJoinDefaults] = useState<
    LocalUserChoices | undefined
  >(undefined);

  const [connectionDetails, setConnectionDetails] = React.useState<
    (ConnectionDetails & { participantAvatar: string }) | undefined
  >(undefined);

  const handlePreJoinSubmit = React.useCallback(
    async (values: LocalUserChoices) => {
      console.log(values);
      setPreJoinChoices(values);
      const url = new URL(CONN_DETAILS_ENDPOINT, window?.location.origin);
      url.searchParams.append('roomName', props.roomIdData);
      url.searchParams.append('participantName', values.username);
      const connectionDetailsResp = await fetch(url.toString());
      const connectionDetailsData = await connectionDetailsResp.json();
      setConnectionDetails(connectionDetailsData);
    },
    [props.roomIdData]
  );
  const handlePreJoinError = React.useCallback((e: Error) => {
    console.error(e);
  }, []);

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (user) {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const hasMicrophone = devices.some(
            (device) => device.kind === 'audioinput'
          );
          const hasCamera = devices.some(
            (device) => device.kind === 'videoinput'
          );

          setPreJoinDefaults({
            username: user.name.trim(),
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
  }, [user]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (
    typeof window === 'undefined' ||
    !user ||
    isLoading ||
    userLoading ||
    !preJoinDefaults
  ) {
    return <Loading />;
  }

  return (
    <LayoutContextProvider>
      <main data-lk-theme='default' style={{ height: '100%' }}>
        {connectionDetails === undefined || preJoinChoices === undefined ? (
          <>
            <Header />
            <div
              className='bg-login-custom'
              style={{
                display: 'grid',
                placeItems: 'center',
                paddingTop: '64px',
                height: '100%',
              }}
            >
              <div>
                <PreJoin
                  imgPlaceholder={user.avatarUrl ?? ''}
                  defaults={preJoinDefaults}
                  onSubmit={handlePreJoinSubmit}
                  onError={handlePreJoinError}
                  persistUserChoices={false}
                  roomIdData={props.roomIdData}
                />
              </div>
            </div>
          </>
        ) : (
          <VideoConferenceComponent
            connectionDetails={connectionDetails}
            userChoices={preJoinChoices}
            options={{ codec: props.codec, hq: props.hq }}
          />
        )}
      </main>
    </LayoutContextProvider>
  );
}

function VideoConferenceComponent(props: {
  userChoices: LocalUserChoices;
  connectionDetails: ConnectionDetails & { participantAvatar: string };
  options: {
    hq: boolean;
    codec: VideoCodec;
  };
}) {
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
      },
      adaptiveStream: { pixelDensity: 'screen' },
      dynacast: true,
    };
  }, [props.userChoices, props.options.hq, props.options.codec]);

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
    console.error(e);
    toast.error(`Gặp lỗi không mong muốn: ${e.message}`, {
      theme: 'colored',
    });
  }, []);

  return (
    <>
      <LiveKitRoom
        connect={true}
        room={room}
        token={props.connectionDetails.participantToken}
        serverUrl={props.connectionDetails.serverUrl}
        connectOptions={connectOptions}
        video={props.userChoices.videoEnabled}
        audio={props.userChoices.audioEnabled}
        onDisconnected={handleOnLeave}
        onError={handleError}
      >
        <VideoConference SettingsComponent={SettingsMenu} />
        <RecordingIndicator />
      </LiveKitRoom>
    </>
  );
}

export type WidgetState = {
  showChat: boolean;
  showSettings?: boolean;
};

const VideoConference = ({
  SettingsComponent,
  ...props
}: {
  SettingsComponent: React.FC | undefined;
}) => {
  const [widgetState, setWidgetState] = React.useState<WidgetState>({
    showChat: false,
    showSettings: false,
  });
  const lastAutoFocusedScreenShareTrack =
    React.useRef<TrackReferenceOrPlaceholder | null>(null);

  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { updateOnlyOn: [RoomEvent.ActiveSpeakersChanged], onlySubscribed: false }
  );

  const widgetUpdate = (state: WidgetState) => {
    setWidgetState(state);
  };

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
    <div className='lk-video-conference' {...props}>
      {isWeb() && (
        <LayoutContextProvider
          value={layoutContext}
          onWidgetChange={widgetUpdate}
        >
          <div className='lk-video-conference-inner'>
            {!focusTrack ? (
              <div className='lk-grid-layout-wrapper'>
                <GridLayout tracks={tracks}>
                  <ParticipantTile />
                </GridLayout>
              </div>
            ) : (
              <div className='lk-focus-layout-wrapper'>
                <FocusLayoutContainer>
                  <CarouselLayout tracks={carouselTracks}>
                    <ParticipantTile />
                  </CarouselLayout>
                  {focusTrack && <FocusLayout trackRef={focusTrack} />}
                </FocusLayoutContainer>
              </div>
            )}
            <ControlBar
              controls={{ chat: true, settings: !!SettingsComponent }}
            />
          </div>
          <Chat style={{ display: widgetState.showChat ? 'grid' : 'none' }} />
          {SettingsComponent && (
            <div
              className='lk-settings-menu-modal z-[1000] max-w-[350px] w-full xs:max-w-auto'
              style={{ display: widgetState.showSettings ? 'block' : 'none' }}
            >
              <SettingsComponent />
            </div>
          )}
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
