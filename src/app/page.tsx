'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { generateRoomId } from '@/lib/client-utils';
import styles from '@/styles/Home.module.css';
import Header from '@/components/customs/header';
import { useMe } from '@/hooks/use-me';
import Loading from '@/components/customs/loading';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../app/support/components/Editor'), {
  ssr: false
})

function MeetingTab() {
  const router = useRouter();
  const startMeeting = () => {
    const roomId = generateRoomId();
    router.push(`/rooms/${roomId}`);
  };
  return (
    <>
      <Header />
      <div className={styles.tabContent}>
        <p style={{ margin: 0 }}>Essay Platform for Essay Support Services</p>
        <button
          style={{ marginTop: '1rem' }}
          className='lk-button'
          onClick={startMeeting}
        >
          Bắt đầu cuộc họp
        </button>
      </div>
    </>
  );
}

export default function Page() {
  const { userLoading } = useMe();

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  if (userLoading) {
    return <Loading />;
  }
  return (
    <>
      {/* <main className={styles.main} data-lk-theme='default'>
        <div className='header'>
          <img src='/main_icon.png' alt='EPESS' width={200} className='!mb-5' />
        </div>
        <MeetingTab />
      </main> */}
      <Editor />
    </>
  );
}
