import React, { useState } from 'react';
import FormFields from './FormFields';
import { postData } from '../Utils/ApiCalls';

const Step2Form = ({ form1Data }) => {
  const [minExperience, setMinExperience] = useState();
  const [maxExperience, setMaxExperience] = useState();
  const [minSalary, setMinSalary] = useState();
  const [maxSalary, setMaxSalary] = useState();
  const [totalEmp, setTotalEmp] = useState();
  const [radioValue, setRadioValue] = useState(0);

  const formData = {
    form1Data: form1Data,
    minExperience: minExperience,
    maxExperience: maxExperience,
    minSalary: minSalary,
    maxSalary: maxSalary,
    totalEmp: totalEmp,
    radioValue: radioValue,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do api  post calls
    postData(formData);
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
              Step 2
            </p>
          </div>
          <>
            <div className="flex flex-row justify-between">
              <FormFields
                label="Experience"
                placeholder="Minimum"
                id="experience"
                double="w-[218.5px]"
                isRequired={false}
                name="experience"
                type="number"
                value={minExperience}
                setValue={setMinExperience}
              />
              <FormFields
                placeholder="Maximum"
                double="w-[218.5px]"
                name="experience"
                isRequired={false}
                split="mt-[20px]"
                type="number"
                value={maxExperience}
                setValue={setMaxExperience}
              />
            </div>
            <div className="flex flex-row justify-between">
              <FormFields
                label="Salary"
                placeholder="Minimum"
                id="salary"
                double="w-[218.5px]"
                name="salary"
                isRequired={false}
                type="number"
                value={minSalary}
                setValue={setMinSalary}
              />
              <FormFields
                placeholder="Maximum"
                double="w-[218.5px]"
                name="salary"
                isRequired={false}
                split="mt-[20px]"
                type="number"
                value={maxSalary}
                setValue={setMaxSalary}
              />
            </div>
            <FormFields
              label="Total employee"
              id="total employee"
              name="total employee"
              isRequired={false}
              placeholder="ex.100"
              type="number"
              value={totalEmp}
              setValue={setTotalEmp}
            />
            <div className="mt-6">
              <span className="text-sm font-medium">Apply Type</span>
              <div className="flex flex-row">
                <input
                  type="radio"
                  id="quick-apply"
                  name="apply"
                  value={1}
                  onChange={(e) => {
                    setRadioValue(e.target.value);
                  }}
                />
                 {' '}
                <label
                  htmlFor="quick-apply"
                  className="text-[#7A7A7A]"
                >
                  Quick Apply
                </label>
                <input
                  type="radio"
                  id="external-apply"
                  name="apply"
                  value={2}
                  className=" ml-4"
                  onChange={(e) => {
                    setRadioValue(e.target.value);
                  }}
                />
                 {' '}
                <label
                  for="external-apply"
                  className="text-[#7A7A7A]"
                >
                  External Apply
                </label>
              </div>
            </div>
          </>
          <div className="flex justify-end">
            <button
              className="py-2 px-4 rounded-md bg-cyan-500 mt-24 "
              type="submit"
            >
              <span className="text-white">Save</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2Form;
