import React from 'react';

const AnimatedCircles = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute bg-yellow-300/30 rounded-full blur-2xl opacity-35 animate-slowMove1 w-72 h-72"></div>
        <div className="absolute bg-orange-300/30 rounded-full blur-2xl opacity-35 animate-slowMove2 w-96 h-96"></div>
        <div className="absolute bg-red-300/30 rounded-full blur-2xl opacity-35 animate-slowMove3 w-64 h-64"></div>
      </div>
    </div>
  );
};

export default AnimatedCircles;
