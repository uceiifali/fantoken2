import React from 'react';
import PeriodOne from './PeriodOne/PeriodOne';
import PeriodThree from './PeriodThree/PeriodThree';
import PeriodTwo from './PeriodTwo/PeriodTwo';

const Periods = () => {
  return (
    <div className="flex items-center sm:justify-evenly w-full flex-col sm:flex-row   ">
      <div className=" w-full  h-48 border-b  sm:border-b-0  px-2 border-[rgba(11,29,70,0.5)]">
        <PeriodOne />
      </div>
      <div className="w-[1px] h-48 bg-[rgba(11,29,70,0.5)] hidden sm:flex"></div>
      <div className=" w-full   h-48 mt-2 lg:mt-0 border-b sm:border-b-0 px-4 border-[rgba(11,29,70,0.5)]">
        <PeriodTwo />
      </div>
      <div className="w-[1px] h-48 bg-[rgba(11,29,70,0.5)] hidden sm:flex"></div>
      <div className=" w-full h-48 ">
        <PeriodThree />
      </div>
    </div>
  );
};

export default Periods;
