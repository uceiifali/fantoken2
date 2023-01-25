import React from 'react';

const TeamTwoScore = ({ ScoreNum, BorderColor, BGColor }) => {
  return (
    <div
      className={`lg:w-32 lg:h-14 w-[100px] h-11 border border-${BorderColor} bg-${BGColor} rounded-full flex items-center justify-center`}
    >
      <p className="font-bouldBold text-lg text-blue">{ScoreNum}</p>
    </div>
  );
};

export default TeamTwoScore;
