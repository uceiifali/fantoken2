import React from 'react';
import TeamOneLogo from '../../../common/TeamOneLogo';

const TeamOne = () => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-3  ">
      <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-1 md:gap-3 ">
        <p className="font-normal text-lg text-blue capitalize font-bouldReg">
          italy
        </p>
        <TeamOneLogo />
      </div>
      <p className="font-bold text-3xl text-blue font-bouldBold">5</p>
    </div>
  );
};

export default TeamOne;
