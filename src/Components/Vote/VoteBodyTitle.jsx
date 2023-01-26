import React from 'react';
import VoteImage from './VoteImage';

const VoteBodyTitle = () => {
  return (
    <div className="flex justify-center items-start  gap-4 flex-col mt-8  h-full w-[320px] sm:h-[334px] sm:w-[693.5px]">
      <div className="w-36 h-7 border-red border flex items-center justify-center rounded-full">
        <p className="text-red font-bouldBold text-sm">Deadline:12.10.2022</p>
      </div>
      <p className="font-bouldReg text-blue text-base w-full leading-[19.2px] ">
        Call park out she wife face mean. Invitation excellence imprudence
        understood it continuing to. Ye show done an into. Fifteen winding
        related may hearted colonel are way studied. County suffer twenty or
        marked no moment in he.
      </p>
      <VoteImage />
    </div>
  );
};

export default VoteBodyTitle;
