import React from 'react';
import DigitalHockeyDetailContainer from './DigitalHockey/DigitalHockeyDetails/DigitalHockeyDetailContainer';
import DigitalHockeyLinks from './DigitalHockey/DigitalHockeyLinks';
import DigitalHockeyScore from './DigitalHockey/DigitalHockeyScore';
import DigitalHockeyTitles from './DigitalHockey/DigitalHockeyTitles';

const DigitalHockey = () => {
  return (
    <div className="px-5  md:px-[135px] py-8">
      <DigitalHockeyTitles />
      <DigitalHockeyLinks />
      <DigitalHockeyScore />
      <DigitalHockeyDetailContainer />
    </div>
  );
};

export default DigitalHockey;
