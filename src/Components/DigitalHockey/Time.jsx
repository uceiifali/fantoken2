import React from 'react';

const Time = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-7 h-7 rounded-full border-blue border flex items-center justify-center">
        <p className="font-bold text-base text-blue">1</p>
      </div>
      <p className="font-normal text-base text-blue">2:50</p>
    </div>
  );
};

export default Time;
