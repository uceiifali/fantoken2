import React from 'react';

const PeriodOneDetail = ({ Period, buttonBg, text, final }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-normal lg:text-xl text-lg text-blue font-bouldReg">
        {Period} Period{final}:
      </p>
      <p
        className={`bg-${buttonBg}  font-bold text-xs text-white w-20 h-7 rounded-full font-bouldBold flex items-center justify-center`}
      >
        {text}
      </p>
    </div>
  );
};

export default PeriodOneDetail;
