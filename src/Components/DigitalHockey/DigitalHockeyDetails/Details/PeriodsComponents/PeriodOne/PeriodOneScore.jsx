import React from 'react';
import PeriodOneTeamOne from '../../../../../../common/PeriodTeamScore/PeriodOneTeamOne';
import PeriodTeamTwo from '../../../../../../common/PeriodTeamScore/PeriodTeamTwo';

const PeriodOneScore = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <div>
        <PeriodOneTeamOne
          ScoreNum={5}
          BorderColor={'red'}
          BGColor={'redDark'}
        />
      </div>
      <div>
        <p className="font-bouldBold text-blue text-base">VS</p>
      </div>
      <div>
        <PeriodTeamTwo ScoreNum={0} BorderColor={'red'} BGColor={'redDark'} />
      </div>
    </div>
  );
};

export default PeriodOneScore;
