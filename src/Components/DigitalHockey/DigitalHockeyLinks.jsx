import React from 'react';
const DigitalHockeyLinks = () => {
  return (
    <div className="flex items-center md:w-full  pt-6 w-96 gap-3 lg:gap-4 ">
      <div>
        <a
          href=""
          className="font-bold text-base md:text-lg font-blue border-b-2 border-blue py-4 font-bouldBold"
        >
          Live Matches
        </a>
      </div>
      <div>
        <a
          href=""
          className="font-normal  text-base md:text-lg font-blue font-bouldReg "
        >
          Upcoming matches
        </a>
      </div>
      <div>
        <a
          href=""
          className="font-normal  text-base md:text-lg font-blue font-bouldReg"
        >
          Previous matches
        </a>
      </div>
    </div>
  );
};

export default DigitalHockeyLinks;
