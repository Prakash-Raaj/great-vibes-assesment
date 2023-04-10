import React, { useState } from 'react';
import Step2Form from './Step2Form';
import Step1Form from './Step1Form';

const FormBuilder = ({ setIsFormVisible }) => {
  const [onNext, setOnNext] = useState(false);
  const [form1Data, setForm1Data] = useState({
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: '',
  });
  return (
    <div className="h-screen flex justify-center items-center">
      {onNext === false ? (
        <Step1Form
          setOnNext={setOnNext}
          form1Data={form1Data}
          setForm1Data={setForm1Data}
        />
      ) : (
        <Step2Form
          form1Data={form1Data}
          setIsFormVisible={setIsFormVisible}
        />
      )}
    </div>
  );
};

export default FormBuilder;
