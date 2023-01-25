import TeamTwoLogo from '@/common/TeamTwoLogo';
import React from 'react';
import TeamTwoScore from './TeamTwoScore';

const PeriodTeamTwo = ({ ScoreNum, BorderColor, BGColor }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <TeamTwoLogo />
      <TeamTwoScore
        ScoreNum={ScoreNum}
        BorderColor={BorderColor}
        BGColor={BGColor}
      />
    </div>
  );
};

export default PeriodTeamTwo;
