import React from 'react';
import Image from 'next/image';
import Logo from './image_6.svg';
const TeamOneLogo = () => {
  return (
    <div className="w-14 h-14 rounded-full border border-blue flex items-center justify-center">
      <Image src={Logo} alt="" />
    </div>
  );
};

export default TeamOneLogo;
