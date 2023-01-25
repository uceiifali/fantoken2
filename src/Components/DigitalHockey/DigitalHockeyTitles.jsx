import React from 'react';
import { IoInformationCircle } from 'react-icons/io5';
const DigitalHockeyTitles = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-[52px] text-blue font-bouldBold uppercase">
        Digital hockey
      </h1>
      <p className="font-normal text-base md:text-lg  leading-5 text-secDark font-bouldReg mt-4 w-[70%] md:w-[100%]">
        Here you can bet and score upgrades for your fan-token
      </p>
      <div className="bg-bgDark flex items-center gap-1 p-2  font-bouldReg rounded-2xl mt-3 ">
        <IoInformationCircle className="text-xl" />
        <p className="text-sm font-bouldReg text-blue">
          Predictions are open before the start of the game
        </p>
      </div>
    </div>
  );
};

export default DigitalHockeyTitles;
