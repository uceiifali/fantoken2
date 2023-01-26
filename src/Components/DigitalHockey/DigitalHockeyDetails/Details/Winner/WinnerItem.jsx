import React from 'react';
import TeamOneLogo from '../../../../../common/TeamOneLogo';
import WinnerContent from './WinnerContent';

const WinnerItem = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <TeamOneLogo />
      <WinnerContent />
    </div>
  );
};

export default WinnerItem;
