import React, { useEffect, useState } from 'react';
// import { jobDetails } from '../Constants';
import { fetchData } from '../Utils/ApiCalls';
import JobCard from './JobCard';

const Jobs = () => {
  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    async function fetchJobDetails() {
      const res = await fetchData();
      setJobDetails(res.data);
    }
    fetchJobDetails();
  }, []);
  console.log(jobDetails);
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 auto-cols-auto p-[20px]">
      {jobDetails.map((d) => (
        <JobCard
          title={d.form1Data.jobTitle}
          company={d.form1Data.companyName}
          industry={d.form1Data.industry}
          location={d.form1Data.location}
          remoteType={d.form1Data.remoteType}
          minExperience={d.minExperience}
          maxExperience={d.maxExperience}
          minSalary={d.minSalary}
          maxSalary={d.maxSalary}
          employees={d.totalEmp}
          radioValue={d.radioValue}
          id={d.id}
        />
      ))}
    </div>
  );
};

export default Jobs;
