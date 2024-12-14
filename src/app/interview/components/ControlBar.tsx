import { Track } from 'livekit-client';
import * as React from 'react';
import { MediaDeviceMenu } from '@livekit/components-react';
import { DisconnectButton } from '@livekit/components-react';
import { TrackToggle } from '@livekit/components-react';
import {
  // ChatIcon,
  GearIcon,
  LeaveIcon,
} from '@livekit/components-react';
// import { ChatToggle } from '@livekit/components-react';
import {
  useLocalParticipantPermissions,
  usePersistentUserChoices,
} from '@livekit/components-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useMaybeLayoutContext } from '@livekit/components-react';
import { supportsScreenSharing } from '@livekit/components-core';
import { mergeProps } from '@/lib/utils';
import { StartMediaButton } from '@livekit/components-react';
import { SettingsMenuToggle } from './SettingMenuToggle';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';

/** @public */
export type ControlBarControls = {
  microphone?: boolean;
  camera?: boolean;
  chat?: boolean;
  screenShare?: boolean;
  leave?: boolean;
  settings?: boolean;
};

/** @public */
export interface ControlBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onDeviceError?: (error: { source: Track.Source; error: Error }) => void;
  variation?: 'minimal' | 'verbose' | 'textOnly';
  controls?: ControlBarControls;
  /**
   * If `true`, the user's device choices will be persisted.
   * This will enable the user to have the same device choices when they rejoin the room.
   * @defaultValue true
   * @alpha
   */
  saveUserChoices?: boolean;
}

/**
 * The `ControlBar` prefab gives the user the basic user interface to control their
 * media devices (camera, microphone and screen share), open the `Chat` and leave the room.
 *
 * @remarks
 * This component is build with other LiveKit components like `TrackToggle`,
 * `DeviceSelectorButton`, `DisconnectButton` and `StartAudio`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ControlBar />
 * </LiveKitRoom>
 * ```
 * @public
 */
export function ControlBar({
  variation,
  controls,
  saveUserChoices = true,
  onDeviceError,
  ...props
}: ControlBarProps) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const layoutContext = useMaybeLayoutContext();
  React.useEffect(() => {
    if (layoutContext?.widget.state?.showChat !== undefined) {
      setIsChatOpen(layoutContext?.widget.state?.showChat);
    }
  }, [layoutContext?.widget.state?.showChat]);
  const isTooLittleSpace = useMediaQuery(
    `(max-width: ${isChatOpen ? 1000 : 900}px)`
  );

  const is430px = useMediaQuery(`(max-width: 430px)`);

  const defaultVariation = isTooLittleSpace ? 'minimal' : 'verbose';
  variation ??= defaultVariation;

  const visibleControls = { leave: true, ...controls };

  const localPermissions = useLocalParticipantPermissions();

  if (!localPermissions) {
    visibleControls.camera = false;
    visibleControls.chat = false;
    visibleControls.microphone = false;
    visibleControls.screenShare = false;
  } else {
    visibleControls.camera ??= localPermissions.canPublish;
    visibleControls.microphone ??= localPermissions.canPublish;
    visibleControls.screenShare ??= localPermissions.canPublish;
    visibleControls.chat ??= localPermissions.canPublishData && controls?.chat;
  }

  const showIcon = React.useMemo(
    () => variation === 'minimal' || variation === 'verbose',
    [variation]
  );
  const showText = React.useMemo(
    () => variation === 'textOnly' || variation === 'verbose',
    [variation]
  );

  const browserSupportsScreenSharing = supportsScreenSharing();

  const [isScreenShareEnabled, setIsScreenShareEnabled] = React.useState(false);

  const onScreenShareChange = React.useCallback(
    (enabled: boolean) => {
      setIsScreenShareEnabled(enabled);
    },
    [setIsScreenShareEnabled]
  );

  const htmlProps = mergeProps({ className: 'lk-control-bar' }, props);

  const {
    saveAudioInputEnabled,
    saveVideoInputEnabled,
    saveAudioInputDeviceId,
    saveVideoInputDeviceId,
  } = usePersistentUserChoices({ preventSave: !saveUserChoices });

  const microphoneOnChange = React.useCallback(
    (enabled: boolean, isUserInitiated: boolean) =>
      isUserInitiated ? saveAudioInputEnabled(enabled) : null,
    [saveAudioInputEnabled]
  );

  const cameraOnChange = React.useCallback(
    (enabled: boolean, isUserInitiated: boolean) =>
      isUserInitiated ? saveVideoInputEnabled(enabled) : null,
    [saveVideoInputEnabled]
  );

  return (
    <div {...htmlProps} style={is430px ? { justifyContent: 'flex-start' } : {}}>
      {!is430px && (
        <>
          {visibleControls.microphone && (
            <div className='lk-button-group'>
              <TrackToggle
                source={Track.Source.Microphone}
                showIcon={showIcon}
                onChange={microphoneOnChange}
                onDeviceError={(error) =>
                  onDeviceError?.({ source: Track.Source.Microphone, error })
                }
              >
                {showText && 'Microphone'}
              </TrackToggle>
              <div className='lk-button-group-menu'>
                <MediaDeviceMenu
                  kind='audioinput'
                  onActiveDeviceChange={(_kind, deviceId) =>
                    saveAudioInputDeviceId(deviceId ?? '')
                  }
                />
              </div>
            </div>
          )}
          {visibleControls.camera && (
            <div className='lk-button-group'>
              <TrackToggle
                source={Track.Source.Camera}
                showIcon={showIcon}
                onChange={cameraOnChange}
                onDeviceError={(error) =>
                  onDeviceError?.({ source: Track.Source.Camera, error })
                }
              >
                {showText && 'Camera'}
              </TrackToggle>
              <div className='lk-button-group-menu'>
                <MediaDeviceMenu
                  kind='videoinput'
                  onActiveDeviceChange={(_kind, deviceId) =>
                    saveVideoInputDeviceId(deviceId ?? '')
                  }
                />
              </div>
            </div>
          )}
          {visibleControls.screenShare && browserSupportsScreenSharing && (
            <TrackToggle
              source={Track.Source.ScreenShare}
              captureOptions={{ audio: true, selfBrowserSurface: 'include' }}
              showIcon={showIcon}
              onChange={onScreenShareChange}
              onDeviceError={(error) =>
                onDeviceError?.({ source: Track.Source.ScreenShare, error })
              }
            >
              {showText && (isScreenShareEnabled ? 'Dừng chia sẻ' : 'Màn hình')}
            </TrackToggle>
          )}
          {/* {visibleControls.chat && (
            <ChatToggle>
              {showIcon && <ChatIcon />}
              {showText && 'Tin nhắn'}
            </ChatToggle>
          )} */}
          {visibleControls.settings && (
            <SettingsMenuToggle>
              {showIcon && <GearIcon />}
              {showText && 'Cài đặt'}
            </SettingsMenuToggle>
          )}
          {visibleControls.leave && (
            <DisconnectButton>
              {showIcon && <LeaveIcon />}
              {showText && 'Rời cuộc họp'}
            </DisconnectButton>
          )}
          <StartMediaButton />
        </>
      )}
      {is430px && (
        <Popover>
          <PopoverTrigger>
            <Button
              className='h-full flex items-center justify-center'
              variant='secondary'
            >
              <span className='xs:hidden block'>Chức năng</span>
              <EllipsisVertical className='block xs:hidden' />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div {...htmlProps} className='flex flex-col gap-5'>
              {visibleControls.microphone && (
                <div className='lk-button-group bg-zinc-800 flex items-center justify-center relative'>
                  <TrackToggle
                    source={Track.Source.Microphone}
                    showIcon={true}
                    onChange={microphoneOnChange}
                    onDeviceError={(error) =>
                      onDeviceError?.({
                        source: Track.Source.Microphone,
                        error,
                      })
                    }
                  >
                    Microphone
                  </TrackToggle>
                  <div className='lk-button-group-menu bg-zinc-900 absolute top-0 right-0 bottom-0'>
                    <MediaDeviceMenu
                      kind='audioinput'
                      onActiveDeviceChange={(_kind, deviceId) =>
                        saveAudioInputDeviceId(deviceId ?? '')
                      }
                    />
                  </div>
                </div>
              )}
              {visibleControls.camera && (
                <div className='lk-button-group bg-zinc-800 flex items-center justify-center relative'>
                  <TrackToggle
                    source={Track.Source.Camera}
                    showIcon={true}
                    onChange={cameraOnChange}
                    onDeviceError={(error) =>
                      onDeviceError?.({ source: Track.Source.Camera, error })
                    }
                  >
                    Camera
                  </TrackToggle>
                  <div className='lk-button-group-menu bg-zinc-900 absolute top-0 right-0 bottom-0'>
                    <MediaDeviceMenu
                      kind='videoinput'
                      onActiveDeviceChange={(_kind, deviceId) =>
                        saveVideoInputDeviceId(deviceId ?? '')
                      }
                    />
                  </div>
                </div>
              )}
              {visibleControls.screenShare && browserSupportsScreenSharing && (
                <TrackToggle
                  source={Track.Source.ScreenShare}
                  captureOptions={{
                    audio: true,
                    selfBrowserSurface: 'include',
                  }}
                  showIcon={true}
                  onChange={onScreenShareChange}
                  onDeviceError={(error) =>
                    onDeviceError?.({
                      source: Track.Source.ScreenShare,
                      error,
                    })
                  }
                  className='!bg-zinc-800'
                >
                  {isScreenShareEnabled ? 'Dừng chia sẻ' : 'Màn hình'}
                </TrackToggle>
              )}
              {/* {visibleControls.chat && (
                <ChatToggle className='!bg-zinc-800'>
                  <ChatIcon />
                  Tin nhắn
                </ChatToggle>
              )} */}
              {visibleControls.settings && (
                <SettingsMenuToggle className='!bg-zinc-800'>
                  <GearIcon />
                  Cài đặt
                </SettingsMenuToggle>
              )}
              {visibleControls.leave && (
                <DisconnectButton className='!bg-zinc-800 text-[#f91f31] border border-solid border-[#f91f31]'>
                  <LeaveIcon />
                  Rời cuộc họp
                </DisconnectButton>
              )}
              <StartMediaButton className='!bg-zinc-800' />
            </div>
            <style>{is430pxStyle}</style>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

const is430pxStyle = `
.lk-device-menu {
  background-color: #27272a;
  font-size: 10px;
  font-weight: bold;
}
.lk-media-device-select [data-lk-active=true]>.lk-button {
  color: #fff;
  background-color: #1f8cf9;
}
.lk-button[data-lk-source=screen_share][data-lk-enabled=true], [data-lk-source=screen_share][data-lk-enabled=true].lk-start-audio-button, [data-lk-source=screen_share][data-lk-enabled=true].lk-chat-toggle, [data-lk-source=screen_share][data-lk-enabled=true].lk-disconnect-button {
  background-color: #1f8cf9 !important;
}
`;
