import React from 'react';
import PeriodOneScore from './PeriodOneScore';
import PeriodDetails from '../../../../../../common/PeriodDetails';
const PeriodOne = () => {
  return (
    <div>
      <PeriodDetails Period={1} buttonBg={'bg-red'} text={'Unguessed'} />
      <PeriodOneScore />
    </div>
  );
};

export default PeriodOne;
