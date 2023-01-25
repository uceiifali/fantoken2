import React from 'react';
import PeriodOne from './PeriodsComponents/PeriodOne/PeriodOne';
import PeriodThree from './PeriodsComponents/PeriodThree/PeriodThree';
import PeriodTwo from './PeriodsComponents/PeriodTwo/PeriodTwo';

const Periods = () => {
  return (
    <div className="flex items-center sm:justify-evenly w-full flex-col sm:flex-row  gap-8 ">
      <div className=" md:w-72 lg:w-64  h-48 border-b  sm:border-b-0  px-2 border-[rgba(11,29,70,0.5)]">
        <PeriodOne />
      </div>
      <div className="w-[1px] h-48 bg-[rgba(11,29,70,0.5)] hidden sm:flex"></div>
      <div className=" md:w-72 lg:w-64   h-48 mt-2 lg:mt-0 border-b sm:border-b-0 px-4 border-[rgba(11,29,70,0.5)]">
        <PeriodTwo />
      </div>
      <div className="w-[1px] h-48 bg-[rgba(11,29,70,0.5)] hidden sm:flex"></div>
      <div className=" lg:w-72 md:w-80 h-48 ">
        <PeriodThree />
      </div>
    </div>
  );
};

export default Periods;
