import React from 'react';
import icon from '../assets/Icon.png';

const JobCard = ({
  title,
  company,
  industry,
  location,
  remoteType,
  minExperience,
  maxExperience,
  minSalary,
  maxSalary,
  employees,
  radioValue,
}) => {
  return (
    <div className="rounded-[10px] bg-white py-4 px-6 h-[320px]">
      <div className="flex">
        <img src={icon} alt="company icon" />
        <div className="ml-2">
          <p className="m-0 text-2xl font-normal">{title}</p>
          <p className="text-base font-normal m-0">
            {company} - {industry}
          </p>
        </div>
      </div>
      <div className="ml-14">
        <p className="text-base text-[#646464] font-normal m-0">
          {location}
        </p>
        <p className="mt-6 text-base text-[#212427]">{remoteType}</p>
        <p className="m-0 text-base text-[#212427]">
          Experience ({minExperience} - {maxExperience} years)
        </p>
        <p className="text-base">
          INR (₹) {minSalary} - {maxSalary}/ Month
        </p>
        <p className="text-base">{employees}</p>
        <div className="flex mt-6">
          <button className="bg-[#1597E4] text-base font-medium rounded-md px-4 py-2 text-white">
            Apply Now
          </button>
          {radioValue === '2' ? (
            <button className="text-[#1597E4] border-[#1597E4] text-base font-medium rounded-md ml-6 px-4 py-2 border-2 mr-[461px]">
              External Apply
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
