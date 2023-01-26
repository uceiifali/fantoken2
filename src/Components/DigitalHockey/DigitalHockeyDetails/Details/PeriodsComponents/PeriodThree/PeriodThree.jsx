import React from 'react';
import PeriodDetails from '../../../../../../common/PeriodDetails';
import PeriodThreeScore from './PeriodThreeScore';

const PeriodThree = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-3">
      <PeriodDetails
        Period={3}
        buttonBg={'bg-gray'}
        text={'Waiting'}
        final="(Final)"
      />
      <PeriodThreeScore />
    </div>
  );
};

export default PeriodThree;
