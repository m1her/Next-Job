import React from "react";
import { JobCard } from "./JobCard";

export const LatestJobs = () => {
  return (
    <div className="flex flex-col gap-y-12 px-12 items-center font-inter overflow-hidden">
      <div className="text-zinc-700 font-light text-4xl">
        Why People Choose NEXTJOB
      </div>
      <div className="grid grid-cols-4 gap-2 w-full">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};
