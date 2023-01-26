import React from 'react';
import GroupImage from '../../common/group.png';
import Image from 'next/image';
const VoteImage = () => {
  return (
    <div className="h-full w-full sm:h-[334px] sm:w-[693.5px]">
      <Image src={GroupImage} alt="group" />
    </div>
  );
};

export default VoteImage;
