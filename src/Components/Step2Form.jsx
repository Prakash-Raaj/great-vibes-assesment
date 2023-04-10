import React, { useState } from 'react';
import FormFields from './FormFields';
import { postData } from '../Utils/ApiCalls';

const Step2Form = ({ form1Data, setIsFormVisible }) => {
  const [formData, setFormData] = useState({
    form1Data: form1Data,
    minExperience: '',
    maxExperience: '',
    minSalary: '',
    maxSalary: '',
    totalEmp: '',
    radioValue: 0,
  });

  const handleRadioValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // do api  post calls
    postData(formData);
    setIsFormVisible(false);
  };
  return (
    <div className="w-[577px] mx-auto bg-white rounded-[12px]">
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
                name="minExperience"
                type="number"
                value={formData.minExperience}
                setValue={setFormData}
              />
              <FormFields
                placeholder="Maximum"
                double="w-[218.5px]"
                name="maxExperience"
                isRequired={false}
                split="mt-[20px]"
                type="number"
                value={formData.maxExperience}
                setValue={setFormData}
              />
            </div>
            <div className="flex flex-row justify-between">
              <FormFields
                label="Salary"
                placeholder="Minimum"
                id="salary"
                double="w-[218.5px]"
                name="minSalary"
                isRequired={false}
                type="number"
                value={formData.minSalary}
                setValue={setFormData}
              />
              <FormFields
                placeholder="Maximum"
                double="w-[218.5px]"
                name="maxSalary"
                isRequired={false}
                split="mt-[20px]"
                type="number"
                value={formData.maxSalary}
                setValue={setFormData}
              />
            </div>
            <FormFields
              label="Total employee"
              id="total employee"
              name="totalEmp"
              isRequired={false}
              placeholder="ex.100"
              type="text"
              value={formData.totalEmp}
              setValue={setFormData}
            />
            <div className="mt-6">
              <span className="text-sm font-medium">Apply Type</span>
              <div className="flex flex-row">
                <input
                  type="radio"
                  id="quick-apply"
                  name="radioValue"
                  value={1}
                  onChange={handleRadioValue}
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
                  name="radioValue"
                  value={2}
                  className=" ml-4"
                  onChange={handleRadioValue}
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
