import React from 'react';

const TeamOneScore = ({ ScoreNum, BorderColor, BGColor }) => {
  return (
    <div
      className={`lg:w-24 lg:h-10 w-[100px] h-11 border border-${BorderColor} bg-${BGColor} rounded-full flex items-center justify-center`}
    >
      <p className="font-bouldBold text-lg text-blue">{ScoreNum}</p>
    </div>
  );
};

export default TeamOneScore;
