import { Track } from 'livekit-client';
import * as React from 'react';
import { MediaDeviceMenu } from '@livekit/components-react';
import { DisconnectButton } from '@livekit/components-react';
import { TrackToggle } from '@livekit/components-react';
import { LeaveIcon } from '@livekit/components-react';
import {
  useLocalParticipantPermissions,
  usePersistentUserChoices,
} from '@livekit/components-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useMaybeLayoutContext } from '@livekit/components-react';
import { mergeProps } from '@/lib/utils';
import { StartMediaButton } from '@livekit/components-react';

/** @public */
export type ControlBarControls = {
  microphone?: boolean;
  camera?: boolean;
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
  vertical = false,
  ...props
}: ControlBarProps & { vertical?: boolean }) {
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

  const defaultVariation = isTooLittleSpace ? 'minimal' : 'verbose';
  variation ??= defaultVariation;

  const visibleControls = { leave: true, ...controls };

  const localPermissions = useLocalParticipantPermissions();

  if (!localPermissions) {
    visibleControls.camera = false;
    visibleControls.microphone = false;
    visibleControls.screenShare = false;
  } else {
    visibleControls.camera ??= localPermissions.canPublish;
    visibleControls.microphone ??= localPermissions.canPublish;
    visibleControls.screenShare ??= localPermissions.canPublish;
  }

  const htmlProps = mergeProps({ className: 'lk-control-bar z-0' }, props);

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

  return vertical ? (
    <>
      <div {...htmlProps}>
        {visibleControls.microphone && (
          <div className='flex flex-col justify-center items-center rounded-lg lk-button-group'>
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
              className='!rounded-none !rounded-tl-lg !rounded-tr-lg w-full'
            />
            <div className='flex justify-center items-center bg-zinc-900 rounded-b-lg w-full lk-button-group-menu vertical'>
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
          <div className='flex flex-col justify-center items-center lk-button-group'>
            <TrackToggle
              source={Track.Source.Camera}
              showIcon={true}
              onChange={cameraOnChange}
              onDeviceError={(error) =>
                onDeviceError?.({ source: Track.Source.Camera, error })
              }
              className='!rounded-none !rounded-tl-lg !rounded-tr-lg w-full'
            />
            <div className='flex justify-center items-center bg-zinc-900 rounded-b-lg w-full lk-button-group-menu vertical'>
              <MediaDeviceMenu
                kind='videoinput'
                onActiveDeviceChange={(_kind, deviceId) =>
                  saveVideoInputDeviceId(deviceId ?? '')
                }
              />
            </div>
          </div>
        )}
        {visibleControls.leave && (
          <DisconnectButton className='border-[#f91f31] !bg-zinc-800 hover:bg-[#f91f31] border border-solid text-[#f91f31] hover:text-white'>
            <LeaveIcon />
          </DisconnectButton>
        )}
        <StartMediaButton className='!bg-zinc-800' />
      </div>
      <style>{is430pxStyle}</style>
    </>
  ) : (
    <>
      <div {...htmlProps}>
        {visibleControls.microphone && (
          <div className='lk-button-group'>
            <TrackToggle
              source={Track.Source.Microphone}
              showIcon={true}
              onChange={microphoneOnChange}
              onDeviceError={(error) =>
                onDeviceError?.({ source: Track.Source.Microphone, error })
              }
            ></TrackToggle>
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
              showIcon={true}
              onChange={cameraOnChange}
              onDeviceError={(error) =>
                onDeviceError?.({ source: Track.Source.Camera, error })
              }
            ></TrackToggle>
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
        {visibleControls.leave && (
          <DisconnectButton className='border-[#f91f31] !bg-zinc-800 hover:bg-[#f91f31] border border-solid text-[#f91f31] hover:text-white'>
            <LeaveIcon />
          </DisconnectButton>
        )}
        <StartMediaButton className='!bg-zinc-800' />
      </div>
      <style>{is430pxStyle}</style>
    </>
  );
}

const is430pxStyle = `
.lk-device-menu {
  background-color: #27272a;
  font-size: 12px;
  font-weight: bold;
  z-index: 20;
}
.lk-media-device-select [data-lk-active=true]>.lk-button {
  color: #fff;
  background-color: #1f8cf9;
}
.lk-button[data-lk-source=screen_share][data-lk-enabled=true], [data-lk-source=screen_share][data-lk-enabled=true].lk-start-audio-button, [data-lk-source=screen_share][data-lk-enabled=true].lk-chat-toggle, [data-lk-source=screen_share][data-lk-enabled=true].lk-disconnect-button {
  background-color: #1f8cf9 !important;
}
.vertical .lk-button.lk-button-menu {
  width: 100%;
  border-radius: 0px !important;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
`;
