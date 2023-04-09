import React, { useEffect, useRef, useState } from 'react';
import FormFields from './FormFields';

const Step1Form = ({ setIsFormVisible, setOnNext, ...props }) => {
  // console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.jobTitle || !props.companyName || !props.industry) {
      alert('Please fill out the mandatory fields');
      return;
    }
    console.log(props);
    setOnNext(true);
  };
  return (
    <div className="w-[577px] h-[564px] mx-auto bg-white rounded-[12px]">
      <form onSubmit={handleSubmit}>
        <div className="p-[32px]">
          <div className="flex justify-between">
            <p className="text-xl font-normal text-[#182021]">
              Create a Job
            </p>
            <p className="text-base text-[#182021]  font-medium">
              Step 1
            </p>
          </div>
          <div className="mt-6">
            <FormFields
              label="Job Title"
              placeholder="ex.UX UI Designer"
              id="jobTitle"
              name="Job title"
              value={props.jobTitle}
              setValue={props.setJobTitle}
            />

            <FormFields
              label="Company Name"
              placeholder="ex.Google"
              id="company"
              name="CompanyName"
              value={props.companyName}
              setValue={props.setCompanyName}
            />
            <FormFields
              label="Industry"
              placeholder="ex. Information Technology"
              id="industry"
              name="Industry"
              value={props.industry}
              setValue={props.setIndustry}
            />
            <div className="flex flex-row justify-between">
              <FormFields
                label="Location"
                placeholder="ex.Chennai"
                id="location"
                double="w-[218.5px]"
                name="location"
                value={props.location}
                setValue={props.setLocation}
                isRequired={false}
              />
              <FormFields
                label="Remote Type"
                placeholder="ex.In-Office"
                id="remote-type"
                double="w-[218.5px]"
                name="remote-type"
                value={props.remoteType}
                setValue={props.setRemoteType}
                isRequired={false}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="py-2 px-4 rounded-md bg-cyan-500 mt-24 "
              type="submit"
            >
              <span className="text-white">Next</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1Form;
