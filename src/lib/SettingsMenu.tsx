'use client';
import * as React from 'react';
import { Track } from 'livekit-client';
import {
  useMaybeLayoutContext,
  MediaDeviceMenu,
  TrackToggle,
  useRoomContext,
  useIsRecording,
} from '@livekit/components-react';
import styles from '../styles/SettingsMenu.module.css';

/**
 * @alpha
 */
export interface SettingsMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * @alpha
 */
export function SettingsMenu(props: SettingsMenuProps) {
  const layoutContext = useMaybeLayoutContext();
  const room = useRoomContext();
  const recordingEndpoint = process.env.NEXT_PUBLIC_LK_RECORD_ENDPOINT;

  const settings = React.useMemo(() => {
    return {
      media: {
        camera: true,
        microphone: true,
        label: 'Media Devices',
        speaker: true,
      },
      recording: recordingEndpoint ? { label: 'Recording' } : undefined,
    };
  }, [recordingEndpoint]);

  const tabs = React.useMemo(
    () =>
      Object.keys(settings).filter((t) => t !== undefined) as Array<
        keyof typeof settings
      >,
    [settings]
  );
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const isRecording = useIsRecording();
  const [initialRecStatus, setInitialRecStatus] = React.useState(isRecording);
  const [processingRecRequest, setProcessingRecRequest] = React.useState(false);

  React.useEffect(() => {
    if (initialRecStatus !== isRecording) {
      setProcessingRecRequest(false);
    }
  }, [isRecording, initialRecStatus]);

  const toggleRoomRecording = async () => {
    if (!recordingEndpoint) {
      throw TypeError('No recording endpoint specified');
    }
    setProcessingRecRequest(true);
    setInitialRecStatus(isRecording);
    let response: Response;
    if (isRecording) {
      response = await fetch(recordingEndpoint + `/stop?roomName=${room.name}`);
    } else {
      response = await fetch(
        recordingEndpoint + `/start?roomName=${room.name}`
      );
    }
    if (response.ok) {
    } else {
      console.error(
        'Error handling recording request, check server logs:',
        response.status,
        response.statusText
      );
      setProcessingRecRequest(false);
    }
  };

  return (
    <div
      className='settings-menu'
      style={{ width: '100%'}}
      {...props}
    >
      <div className={styles.tabs}>
        {tabs.map(
          (tab) =>
            settings[tab] && (
              <button
                className={`${styles.tab} lk-button`}
                style={{
                  minWidth: '120px',
                }}
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={tab === activeTab}
              >
                {settings[tab].label}
              </button>
            )
        )}
      </div>
      <div
        className='tab-content'
        style={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {activeTab === 'media' && (
          <>
            {settings.media && settings.media.camera && (
              <>
                <h3>Camera</h3>
                <section className='lk-button-group'>
                  <TrackToggle source={Track.Source.Camera}>Camera</TrackToggle>
                  <div className='lk-button-group-menu'>
                    <MediaDeviceMenu kind='videoinput' />
                  </div>
                </section>
              </>
            )}
            {settings.media && settings.media.microphone && (
              <>
                <h3>Microphone</h3>
                <section className='lk-button-group'>
                  <TrackToggle source={Track.Source.Microphone}>
                    Microphone
                  </TrackToggle>
                  <div className='lk-button-group-menu'>
                    <MediaDeviceMenu kind='audioinput' />
                  </div>
                </section>
              </>
            )}
            {settings.media && settings.media.speaker && (
              <>
                <h3>Speaker & Headphones</h3>
                <section className='lk-button-group'>
                  <span className='lk-button'>Audio Output</span>
                  <div className='lk-button-group-menu'>
                    <MediaDeviceMenu kind='audiooutput'></MediaDeviceMenu>
                  </div>
                </section>
              </>
            )}
          </>
        )}
        {activeTab === 'recording' && (
          <>
            <h3>Record Meeting</h3>
            <section>
              <p>
                {isRecording
                  ? 'Meeting is currently being recorded'
                  : 'No active recordings for this meeting'}
              </p>
              <button
                disabled={processingRecRequest}
                onClick={() => toggleRoomRecording()}
              >
                {isRecording ? 'Stop' : 'Start'} Recording
              </button>
            </section>
          </>
        )}
      </div>
      <button
        className={`lk-button ${styles.settingsCloseButton}`}
        onClick={() =>
          layoutContext?.widget.dispatch?.({ msg: 'toggle_settings' })
        }
      >
        Close
      </button>
    </div>
  );
}
