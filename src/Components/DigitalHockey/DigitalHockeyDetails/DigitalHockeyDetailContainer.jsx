import React from 'react';
import Bar from './Details/Bar';
import Periods from './Details/Periods';

const DigitalHockeyDetailContainer = () => {
  return (
    <div className="w-full lg:h-80 h-full border-x border-b border-blue rounded-b-[65px] -mt-14 -z-10 md:-mt-12">
      <div className="flex items-center justify-center mt-8">
        <Bar />
      </div>
      <div className="mt-4 w-full">
        <Periods />
      </div>
    </div>
  );
};

export default DigitalHockeyDetailContainer;
