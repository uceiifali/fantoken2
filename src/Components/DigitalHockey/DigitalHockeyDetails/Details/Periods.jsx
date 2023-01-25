import React from 'react';
import PeriodOne from './PeriodsComponents/PeriodOne/PeriodOne';
import PeriodThree from './PeriodsComponents/PeriodThree/PeriodThree';
import PeriodTwo from './PeriodsComponents/PeriodTwo/PeriodTwo';

const Periods = () => {
  return (
    <div className="flex  items-center justify-around w-full flex-col lg:flex-row">
      <div className="w-[331.33px] h-[198px] lg:border-r  border-b  lg:border-b-0  px-4 border-[rgba(11,29,70,0.5)] ">
        <PeriodOne />
      </div>
      <div className="w-[331.33px] h-[198px] lg:border-r mt-2 lg:mt-0 border-b lg:border-b-0  px-4 border-[rgba(11,29,70,0.5)] ">
        <PeriodTwo />
      </div>
      <div className="w-[331.33px] h-[198px] px-4 mt-2 lg:mt-0">
        <PeriodThree />
      </div>
    </div>
  );
};

export default Periods;
