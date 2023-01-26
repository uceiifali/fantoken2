import React from 'react';
import DigitalHockeyScore from '../DigitalHockeyDetails/DigitalHockeyScore';

const UpcomingMatches = () => {
  return (
    <div>
      <DigitalHockeyScore
        TeamOneScore={null}
        TeamTwoScore={null}
        time={null}
        upComing={['14:50', '14.10.2022']}
        upComingArrow={true}
      />
      <DigitalHockeyScore
        TeamOneScore={null}
        TeamTwoScore={null}
        time={null}
        upComing={['14:50', '14.10.2022']}
        upComingArrow={true}
      />
    </div>
  );
};

export default UpcomingMatches;
