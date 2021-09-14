import React from 'react';

const Circle = ({ x, y }) => {
  return (
    <svg width={'100vw'} height={'100vh'}>
      <circle cx={x} cy={y} r={40} />
    </svg>
  );
};

export default Circle;
