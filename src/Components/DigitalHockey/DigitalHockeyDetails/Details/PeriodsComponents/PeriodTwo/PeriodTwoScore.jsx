import React from 'react';
import PeriodOneTeamOne from '../../../../../../common/PeriodTeamScore/PeriodOneTeamOne';
import PeriodTeamTwo from '../../../../../../common/PeriodTeamScore/PeriodTeamTwo';
const PeriodTwoScore = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <div>
        <PeriodOneTeamOne
          ScoreNum={5}
          BorderColor={'border-green'}
          BGColor={'bg-darkGreen'}
        />
      </div>
      <div className="flex items-center justify-center x-2">
        <p className="font-bouldBold text-blue text-base">VS</p>
      </div>
      <div>
        <PeriodTeamTwo
          ScoreNum={5}
          BorderColor={'border-green'}
          BGColor={'bg-darkGreen'}
        />
      </div>
    </div>
  );
};

export default PeriodTwoScore;
