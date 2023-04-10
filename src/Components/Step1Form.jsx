import React from 'react';
import FormFields from './FormFields';

const Step1Form = ({ setOnNext, form1Data, setForm1Data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form1Data.jobTitle ||
      !form1Data.companyName ||
      !form1Data.industry
    ) {
      alert('Please fill out the mandatory fields');
      return;
    }
    console.log(form1Data);
    setOnNext(true);
  };
  return (
    <div className="w-[577px]  mx-auto bg-white rounded-[12px]">
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
              name="jobTitle"
              value={form1Data.jobTitle}
              setValue={setForm1Data}
            />

            <FormFields
              label="Company Name"
              placeholder="ex.Google"
              id="company"
              name="companyName"
              value={form1Data.companyName}
              setValue={setForm1Data}
            />
            <FormFields
              label="Industry"
              placeholder="ex. Information Technology"
              id="industry"
              name="industry"
              value={form1Data.industry}
              setValue={setForm1Data}
            />
            <div className="flex flex-row justify-between">
              <FormFields
                label="Location"
                placeholder="ex.Chennai"
                id="location"
                double="w-[218.5px]"
                name="location"
                value={form1Data.location}
                setValue={setForm1Data}
                isRequired={false}
              />
              <FormFields
                label="Remote Type"
                placeholder="ex.In-Office"
                id="remote-type"
                double="w-[218.5px]"
                name="remoteType"
                value={form1Data.remoteType}
                setValue={setForm1Data}
                isRequired={false}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="py-2 px-4 rounded-md bg-cyan-500 mt-24  focus:outline-none"
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
