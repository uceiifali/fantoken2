import React from 'react';
import VoteTitle from './Vote/VoteTitle';
import VoteBody from './Vote/VoteBody';

const Vote = () => {
  return (
    <div className="sm:px-20 px-6  py-10 flex flex-col justify-center items-start sm:justify-between ">
      <VoteTitle />
      <VoteBody />
    </div>
  );
};

export default Vote;
