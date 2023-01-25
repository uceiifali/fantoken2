import React from 'react';

const TeamTwoScore = ({ ScoreNum, BorderColor, BGColor }) => {
  return (
    <div
      className={`w-32 h-14 border border-${BorderColor} bg-${BGColor} rounded-full flex items-center justify-center`}
    >
      <p className="font-bouldBold text-lg text-blue">{ScoreNum}</p>
    </div>
  );
};

export default TeamTwoScore;
