/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import VoteBodyText from './VoteBodyText';
import VoteBtn from './VoteBtn';
import VoteChoose from './VoteChoose';

const VoteBodyForm = () => {
  return (
    <div className="sm:h-[467px] h-full flex flex-col sm:mt-8 -mt-8 gap-5  ">
      <p className="font-bouldBold text-lg text-blue">What's your opinnion?</p>
      <VoteChoose />
      <VoteBodyText />
      <VoteBtn />
    </div>
  );
};

export default VoteBodyForm;
