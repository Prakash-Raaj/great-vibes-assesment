import React, { useEffect, useState } from 'react';
import Step2Form from './Step2Form';
import Step1Form from './Step1Form';

const FormBuilder = () => {
  const [onNext, setOnNext] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [remoteType, setRemoteType] = useState('');

  let form1Data = {
    jobTitle: jobTitle,
    companyName: companyName,
    industry: industry,
    location: location || '',
    remoteType: remoteType || '',
  };

  return (
    <div className="pt-[30px]">
      {onNext === false ? (
        <Step1Form
          setOnNext={setOnNext}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          companyName={companyName}
          setCompanyName={setCompanyName}
          industry={industry}
          setIndustry={setIndustry}
          location={location}
          setLocation={setLocation}
          remoteType={remoteType}
          setRemoteType={setRemoteType}
        />
      ) : (
        <Step2Form form1Data={form1Data} />
      )}
    </div>
  );
};

export default FormBuilder;
