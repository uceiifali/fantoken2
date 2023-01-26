import React, { useState, useEffect } from 'react';
import TeamOne from '../TeamOne/TeamOne';
import TeamTwo from '../TeamTwo/TeamTwo';
import Time from '../Time';
import { AiOutlineArrowDown } from 'react-icons/ai';
import DigitalHockeyDetailContainer from './DigitalHockeyDetailContainer';
const DigitalHockeyScore = ({
  TeamOneScore,
  TeamTwoScore,
  time,
  upComing,
  upComingArrow,
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`w-full h-[101px]  rounded-full mt-12 border border-blue outline-8 outline outline-bgDark flex items-center justify-center gap-4 z-40 bg-white relative flex-col ${
          upComingArrow && ' cursor-pointer'
        } `}
        onClick={() => setActive(!active)}
      >
        <div className="flex items-center justify-center w-full">
          <div>
            <TeamOne TeamOneScore={TeamOneScore} />
          </div>
          <div>
            <Time time={time} upComing={upComing} />
          </div>
          <div>
            <TeamTwo TeamTwoScore={TeamTwoScore} />
          </div>
        </div>
        {upComingArrow && (
          <button
            className="absolute right-10 top-auto hidden sm:flex"
            onClick={() => setActive(!active)}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-blue">
              <AiOutlineArrowDown className="text-xl font-blue" />
            </div>
          </button>
        )}
      </div>
      <div hidden={active === false}>
        <DigitalHockeyDetailContainer />
      </div>
    </>
  );
};

export default DigitalHockeyScore;
