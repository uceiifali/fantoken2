import React from 'react';
import TeamOne from './TeamOne/TeamOne';
import TeamTwo from './TeamTwo/TeamTwo';
import Time from './Time';

const DigitalHockeyScore = () => {
  return (
    <div className="w-full h-[101px] sm:h-20 rounded-full mt-12 border border-blue outline-8 outline outline-bgDark flex items-center justify-center gap-4 z-40 bg-white">
      <div className="z-20">
        <TeamOne />
      </div>
      <div className="z-20">
        <Time />
      </div>
      <div className="z-30">
        <TeamTwo />
      </div>
    </div>
  );
};

export default DigitalHockeyScore;
