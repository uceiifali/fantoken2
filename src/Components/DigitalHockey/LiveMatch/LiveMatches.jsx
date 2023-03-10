import React from 'react';
import DigitalHockeyDetailContainer from '../DigitalHockeyDetails/DigitalHockeyDetailContainer';
import DigitalHockeyScore from '../DigitalHockeyDetails/DigitalHockeyScore';

const LiveMatches = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <DigitalHockeyScore
        TeamOneScore={5}
        TeamTwoScore={0}
        time={[1, '2:50']}
        upComingArrow={false}
      />
      <DigitalHockeyDetailContainer />
    </div>
  );
};

export default LiveMatches;
