import React from 'react';
import VoteBodyForm from './VoteBodyForm';
import VoteBodyTitle from './VoteBodyTitle';

const VoteBody = () => {
  return (
    <div className="flex gap-12  items-start sm:items-center justify-evenly flex-col sm:flex-row w-full">
      <VoteBodyTitle />
      <VoteBodyForm />
    </div>
  );
};

export default VoteBody;
