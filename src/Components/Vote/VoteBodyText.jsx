import React from 'react';

const VoteBodyText = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-bouldReg text-sm font-blue">Other Opinion</p>
      <textarea
        type=""
        name="text"
        id=""
        placeholder="Placeholder"
        className=" py-4 px-6 h-[143px] w-[320px] sm:w-[416.5px] rounded-3xl resize-none border border-[#0D1C3E] focus:border-[#0D1C3E]"
      ></textarea>
    </div>
  );
};

export default VoteBodyText;
