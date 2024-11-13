import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Loading() {
  const text = 'EPESS';

  useEffect(() => {
    gsap.to('.char', {
      y: -35,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'sine.inOut',
      stagger: 0.1,
    });
  }, []);

  return (
    <div className='relative flex justify-center items-center h-screen !bg-background'>
      <div className='wave-text text-9xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {text.split('').map((char, index) => (
          <span key={index} className='char text-slate-200 inline-block'>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}
