import React from 'react';

const WinnerContent = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <p className="text-blue font-bouldBold text-lg">Italy</p>
      <div className="bg-[rgba(11,29,70,0.5)] w-16 h-7 flex items-center justify-center rounded-full">
        <p className="font-bouldBold text-xs text-white">Wining</p>
      </div>
    </div>
  );
};

export default WinnerContent;
