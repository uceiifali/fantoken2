import React from 'react';
import DigitalHockeyLinks from './DigitalHockey/DigitalHockeyLinks';
import DigitalHockeyTitles from './DigitalHockey/DigitalHockeyTitles';

const DigitalHockey = () => {
  return (
    <div className="px-5  md:px-[135px] py-8">
      <DigitalHockeyTitles />
      <DigitalHockeyLinks />
    </div>
  );
};

export default DigitalHockey;
