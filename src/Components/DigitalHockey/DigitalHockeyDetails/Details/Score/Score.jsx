import React from 'react';
import player from '../../../../../common/image_8.png';
import ScoreItem from './ScoreItem';
const Score = () => {
  const scorePlayer = [
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'green',
      bgColor: 'darkGreen',
      borderColor: 'green',
      status: 'Guessed',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'red',
      bgColor: 'redDark',
      borderColor: 'red',
      status: 'Unguessed',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'gray',
      bgColor: 'white',
      borderColor: 'white',
      status: 'Waiting',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'gray',
      bgColor: 'white',
      borderColor: 'white',
      status: 'Waiting',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'gray',
      bgColor: 'white',
      borderColor: 'white',
      status: 'Waiting',
    },
    {
      src: player,
      number: '77',
      name: 'Yanik Burren',
      color: 'gray',
      bgColor: 'white',
      borderColor: 'white',
      status: 'Waiting',
    },
  ];
  return (
    <div className="flex items-center  w-full max-h-52 flex-col gap-3 overflow-y-scroll ">
      <ScoreItem scorePlayer={scorePlayer} />
    </div>
  );
};

export default Score;
