import * as React from 'react';
import { PageClientImpl } from './components/PageClientImpl';
import { isVideoCodec } from '@/lib/types';

export default function Page({
  searchParams,
}: {
  searchParams: {
    roomId?: string;
    hq?: string;
    codec?: string;
  };
}) {
  const codec =
    typeof searchParams.codec === 'string' && isVideoCodec(searchParams.codec)
      ? searchParams.codec
      : 'vp9';
  const hq = searchParams.hq === 'true' ? true : false;

  return (
    <PageClientImpl
      roomIdData={searchParams.roomId ?? ''}
      hq={hq}
      codec={codec}
    />
  );
}
