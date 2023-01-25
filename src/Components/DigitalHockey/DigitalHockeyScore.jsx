import React from 'react';
import TeamOne from './TeamOne/TeamOne';
import TeamTwo from './TeamTwo/TeamTwo';
import Time from './Time';

const DigitalHockeyScore = () => {
  return (
    <div className="w-full h-[101px] md:h-20 rounded-full mt-12 border border-blue outline-8 outline outline-bgDark flex items-center justify-center gap-4 z-50">
      <div>
        <TeamOne />
      </div>
      <div>
        <Time />
      </div>
      <div>
        <TeamTwo />
      </div>
    </div>
  );
};

export default DigitalHockeyScore;
