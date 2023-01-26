import React, { useState } from 'react';
import Periods from './PeriodsComponents/Periods';
import Score from './Score/Score';

const Bar = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex items-center justify-center mt-8 flex-col">
      <div className="w-[274px] bg-[rgba(11,29,70,0.5)] flex items-center justify-center gap-5 rounded-full p-2 h-[39px] mt-10">
        <button
          className={` text-lg  ${
            active == 0
              ? ' text-blue   bg-white rounded-full font-bold w-[96px] h-[31px]'
              : 'text-white font-normal w-20'
          }   flex items-center justify-center `}
          onClick={() => setActive(0)}
        >
          Scores
        </button>

        <button
          className={`${
            active == 1
              ? ' text-blue   bg-white rounded-full font-bold w-[96px] h-[31px]'
              : 'text-white font-normal w-20'
          }  font-normal text-lg  flex items-center justify-center `}
          onClick={() => setActive(1)}
        >
          Players
        </button>
        <button
          className={`${
            active == 2
              ? ' text-blue   bg-white rounded-full font-bold w-[96px] h-[31px]'
              : 'text-white font-normal w-20'
          }   text-lg  flex items-center justify-center`}
          onClick={() => setActive(2)}
        >
          Winner
        </button>
      </div>
      <div className="mt-4 w-full" hidden={active !== 0}>
        <Periods />
      </div>
      <div className="mt-4  w-full " hidden={active !== 1}>
        <Score />
      </div>
      <div className="mt-4 w-full" hidden={active !== 2}>
        <Periods />
      </div>
    </div>
  );
};

export default Bar;
