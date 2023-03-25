import React from 'react';
import { jobDetails } from '../Constants';
import JobCard from './JobCard';

const Jobs = () => {
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 auto-cols-auto p-[20px]">
      {jobDetails.map((d) => (
        <JobCard
          title={d.Title}
          company={d.Company}
          ctc={d.CTC}
          location={d.Location}
          experience={d.Experience}
          jobType={d.jobType}
          employees={d.Employees}
        />
      ))}
    </div>
  );
};

export default Jobs;
