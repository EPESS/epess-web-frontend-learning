'use client';

import React from 'react';
import { Ruler as RulerComponent } from 'react-ruler';

const Ruler = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '50px', overflow: 'hidden' }}>
        <RulerComponent
          width={500}
          height={50}
          unit="px"
          direction="horizontal"
          style={{ backgroundColor: '#f0f0f0' }}
        />
      </div>
    </div>
  );
};

export default Ruler;
