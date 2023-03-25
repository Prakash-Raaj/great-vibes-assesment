import React from 'react';

const JobForm = () => {
  return (
    <div className="w-[577px] h-[564px] mx-auto mt-5 bg-white rounded-[12px]">
      <div className="p-[32px]">
        <div className="flex justify-between">
          <p className="text-xl font-normal text-[#182021]">
            Create a Job
          </p>
          <p className="text-base text-[#182021]  font-medium">
            Step 1
          </p>
        </div>
        <div>
          <div>
            <label htmlFor="title">
              Job title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className=""
              id="title"
              name="title"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
