import React from 'react';
import TeamTwoLogo from '../../../common/TeamTwoLogo';

const TeamTwo = ({ TeamTwoScore }) => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-3">
      <p className="font-bold text-3xl text-blue font-bouldBold">
        {TeamTwoScore}
      </p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-1 md:gap-3">
        <TeamTwoLogo />
        <p className="font-normal text-lg text-blue capitalize font-bouldReg">
          England
        </p>
      </div>
    </div>
  );
};

export default TeamTwo;
