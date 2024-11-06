import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading({
  width = 100,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <ReactLoading
        type='bars'
        className='!fill-slate-400'
        width={width}
        height={height}
      />
    </div>
  );
}
