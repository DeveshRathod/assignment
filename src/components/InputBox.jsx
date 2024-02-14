import React from "react";

const InputBox = ({ label, placeholder, onChange, type }) => {
  return (
    <div className=" pt-2">
      <label>{label}</label>
      <input
        type={type}
        className="block w-80 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
