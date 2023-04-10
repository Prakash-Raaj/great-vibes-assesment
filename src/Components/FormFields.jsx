import React, { useState } from 'react';

const FormFields = ({
  label,
  placeholder,
  id,
  name,
  double,
  isRequired = true,
  split,
  value,
  setValue,
  type = 'text',
}) => {
  const [touched, setTouched] = useState(false);
  let invalidClass = '';
  if (isRequired === true) {
    invalidClass =
      (!value && touched) === true
        ? 'focus:border-red-500 border-red-500'
        : '';
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex flex-col mt-6">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
          {isRequired && <span className="text-red-600">*</span>}
        </label>
        <input
          type={type}
          className={`${double} ${split} rounded-[5px] 
          px-3 py-2 
          placeholder:text-sm placeholder:text-[#7A7A7A] 
          border-[#E6E6E6] border-2 focus:outline-none ${invalidClass}`}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={() => {
            setTouched(true);
          }}
        />
        {!value && touched && isRequired && (
          <span className="text-sm text-red-600 ml-2.5">
            *mandatory field
          </span>
        )}
      </div>
    </>
  );
};

export default FormFields;
