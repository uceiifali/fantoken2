import React from 'react';
import Arrow from '../../common/arrow.png';
import Image from 'next/image';
const VoteTitle = () => {
  return (
    <div className="flex items-center justify-start gap-3">
      <button className="flex items-center justify-center">
        <Image src={Arrow} className="w-[28.13px] h-[26.25px]" alt="arrow" />
      </button>
      <p className="font-bouldBold text-[32px] text-blue">Some Vote title</p>
    </div>
  );
};

export default VoteTitle;
