import React from 'react';

const Bar = () => {
  return (
    <div className="w-[274px] bg-[rgba(11,29,70,0.5)] flex items-center justify-center gap-5 rounded-full p-2 h-[39px] mt-10">
      <div className="w-[96px] h-[31px] bg-white rounded-full flex items-center justify-center">
        <a href="" className="font-bold text-lg text-blue">
          Scores
        </a>
      </div>
      <div className="w-20 h-[31px] flex items-center justify-center">
        <a href="" className="text-white font-normal text-lg">
          Players
        </a>
      </div>
      <div className="w-20 h-[31px] flex items-center justify-center ">
        <a href="" className="text-white font-normal text-lg">
          Winner
        </a>
      </div>
    </div>
  );
};

export default Bar;
