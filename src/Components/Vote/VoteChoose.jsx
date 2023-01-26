import React from 'react';

const VoteChoose = () => {
  return (
    <div className="flex items-start justify-start flex-col gap-4 ">
      <div className="flex items-center justify-center gap-2  text-blue font-bouldReg text-base">
        <input
          type="radio"
          name="Agree"
          id=""
          className="w-5 h-5 border accent-blue "
          checked
        />
        <span className="font-bouldReg text-sm font-blue">Agree</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-blue font-bouldReg text-base">
        <input
          type="radio"
          name="Agree"
          id=""
          className="w-5 h-5 accent-blue"
        />
        <span className="font-bouldReg text-sm font-blue">Disagree</span>
      </div>
    </div>
  );
};

export default VoteChoose;
