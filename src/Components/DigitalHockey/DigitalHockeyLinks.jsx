import React, { useState } from 'react';
import LiveMatches from './LiveMatch/LiveMatches';
import UpcomingMatches from './Upcoming/UpcomingMatches';
import PrevMatches from './PrevMatch/PrevMatches';
const DigitalHockeyLinks = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex items-center w-screen  pt-6  gap-4 ">
        <button
          onClick={() => setActive(0)}
          className={` text-sm sm:text-lg font-blue   ${
            active == 0
              ? ' border-b-2 border-blue font-bold font-bouldBold   py-4'
              : 'font-normal font-bouldReg'
          }`}
        >
          Live Matches
        </button>

        <button
          onClick={() => setActive(1)}
          className={` text-sm sm:text-lg font-blue   ${
            active == 1
              ? ' border-b-2 border-blue font-bold font-bouldBold   py-4'
              : 'font-normal font-bouldReg'
          }`}
        >
          Upcoming matches
        </button>

        <button
          onClick={() => setActive(2)}
          className={` text-sm sm:text-lg font-blue   ${
            active == 2
              ? ' border-b-2 border-blue font-bold font-bouldBold   py-4'
              : 'font-normal font-bouldReg'
          }`}
        >
          Previous matches
        </button>
      </div>
      <div hidden={active !== 0}>
        <LiveMatches />
      </div>
      <div hidden={active !== 1}>
        <UpcomingMatches />
      </div>
      <div hidden={active !== 2}>
        <PrevMatches />
      </div>
    </>
  );
};

export default DigitalHockeyLinks;
