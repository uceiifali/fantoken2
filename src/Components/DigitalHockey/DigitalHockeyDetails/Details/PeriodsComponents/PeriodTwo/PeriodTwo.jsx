import React from 'react';
import PeriodDetails from '../../../../../../common/PeriodDetails';
import PeriodTwoScore from './PeriodTwoScore';
const PeriodOne = () => {
  return (
    <div>
      <PeriodDetails Period={2} buttonBg={'bg-green'} text={'Guessed'} />
      <PeriodTwoScore />
    </div>
  );
};

export default PeriodOne;
