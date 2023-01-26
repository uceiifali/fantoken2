import React from 'react';
import PeriodOneScore from './PeriodOneScore';
import PeriodDetails from '../../../../../../common/PeriodDetails';
const PeriodOne = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <PeriodDetails Period={1} buttonBg={'bg-red'} text={'Unguessed'} />
      <PeriodOneScore />
    </div>
  );
};

export default PeriodOne;
