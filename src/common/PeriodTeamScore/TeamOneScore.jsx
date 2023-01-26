import React from 'react';

const TeamOneScore = ({ ScoreNum, BorderColor, BGColor, color }) => {
  return (
    <div
      className={`lg:w-24 lg:h-10 w-[100px] h-11 border ${BorderColor} ${BGColor} rounded-full flex items-center justify-center`}
    >
      <p className={`font-bouldBold text-lg  ${color} `}>{ScoreNum}</p>
    </div>
  );
};

export default TeamOneScore;
