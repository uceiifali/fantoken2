import React from 'react';
import TeamOneLogo from '../TeamOneLogo';
import TeamOneScore from './TeamOneScore';

const PeriodOneTeamOne = ({ ScoreNum, BorderColor, BGColor, color }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <TeamOneLogo />
      <TeamOneScore
        ScoreNum={ScoreNum}
        BorderColor={BorderColor}
        BGColor={BGColor}
        color={color}
      />
    </div>
  );
};

export default PeriodOneTeamOne;
