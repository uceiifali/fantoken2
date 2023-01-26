import React from 'react';
import Image from 'next/image';
const ScoreItem = ({ scorePlayer }) => {
  return (
    <>
      {scorePlayer.map((item, i) => (
        <div key={i} className="w-[90%]">
          <div
            className={`flex items-center justify-between w-full h-14 ${item.bgColor} border rounded-full ${item.borderColor} p-4`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-[50px] h-[45px] bg-white rounded-full flex items-center justify-center">
                <Image src={item.src} alt={item.src} />
              </div>
              <p>
                #{item.number} {item.name}
              </p>
            </div>
            <div
              className={`flex items-center justify-center rounded-full  w-20 h-7 ${item.color}`}
            >
              <p className="font-bouldBold text-white text-xs">{item.status}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScoreItem;
