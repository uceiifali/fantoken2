import React from 'react';

const Time = ({ time, upComing }) => {
  return (
    <div className="flex items-center justify-center px-4 flex-col">
      {time && (
        <>
          <div className="w-7 h-7 rounded-full border-blue border flex items-center justify-center">
            <p className="font-bold text-base text-blue">{time[0]}</p>
          </div>
          <p className="font-normal text-base text-blue">{time[1]}</p>
        </>
      )}
      {upComing && (
        <>
          <div className=" flex items-center justify-center flex-col">
            <p className="font-bold text-lg text-blue">{upComing[0]}</p>
            <p className="font-normal text-sm text-blue">{upComing[1]}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Time;
