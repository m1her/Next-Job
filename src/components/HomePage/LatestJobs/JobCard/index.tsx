import React from "react";

export const JobCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 font-roboto shadow-[0_0_3px_-1px_rgba(0,0,0,0.1)] bg-white transition-all duration-200 cursor-pointer select-none hover:bg-[#fdfcff] rounded border border-zinc-300 hover:border-zinc-800">
      <div className="text-primary text-lg font-medium">Quality Inspector Specialist</div>
      <div className="text-zinc-600 text-base ">Pharma Overse... - Sohag</div>
      <div className="text-zinc-500 text-xs">2 hours ago</div>
    </div>
  );
};
