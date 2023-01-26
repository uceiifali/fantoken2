import React from 'react';
import player from '../../../../../common/image_8.png';
import ScoreItem from './ScoreItem';
const Score = () => {
  const scorePlayer = [
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'bg-green',
      bgColor: 'bg-darkGreen',
      borderColor: 'border-green',
      status: 'Guessed',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'bg-red',
      bgColor: 'bg-redDark',
      borderColor: 'border-red',
      status: 'Unguessed',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'bg-gray',
      bgColor: 'bg-white',
      borderColor: 'border-gray',
      status: 'Waiting',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'bg-gray',
      bgColor: 'bg-white',
      borderColor: 'border-gray',
      status: 'Waiting',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'bg-gray',
      bgColor: 'bg-white',
      borderColor: 'border-gray',
      status: 'Waiting',
    },
  ];
  return (
    <div className="flex pb-2 sm:pb-6 items-center  w-full max-h-52 flex-col gap-3 overflow-y-scroll players-scroll  ">
      <ScoreItem scorePlayer={scorePlayer} />
    </div>
  );
};

export default Score;
