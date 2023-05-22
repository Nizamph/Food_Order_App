import React from 'react';

const Shimmer = () => {
  console.log('shimmer is calling');
  return (
    <div class='w-64 h-64 rounded-md overflow-hidden relative'>
      <div class='absolute inset-0 bg-gray-200 animate-pulse'></div>
      <div class='absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 bg-no-repeat bg-scroll bg-gradient-anim'></div>
    </div>
  );
};

export default Shimmer;
