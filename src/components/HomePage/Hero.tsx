import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-secondary px-12 pt-0">
      <div className="w-full min-h-screen h-full flex flex-col gap-8 items-center py-8 justify-center rounded-3xl font-roboto bg-gradient-to-r from-primary via-[#248cfa] to-primary shadow-[0_0_10px_-2px_#00000030]">
        <div className="text-white w-3/4 text-center text-[84px] font-extrabold leading-[85px]">
          Find Your Dream Job Easily With NEXTJOB
        </div>
        <div className="text-white w-1/2 text-center text-base opacity-90">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4000 startups.
        </div>
        <div className="flex items-center gap-2 w-3/5">
          <div className="flex items-center border w-full p-0.5 stroke-zinc-600 focus-within:stroke-primary focus-within:border-accent transition duration-300 bg-secondary border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
            <svg
              className="pl-2 w-8 "
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                fill="none"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.2216 33.2217L41.7069 41.707"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for products"
              className="w-full h-full px-2 placeholder:text-zinc-600 bg-transparent outline-none text-sm peer"
            />
            <div className="rounded-[5px] h-full flex items-center justify-center transition duration-300 bg-zinc-600 peer-focus:bg-accent text-base font- text-white px-6 py-2">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
