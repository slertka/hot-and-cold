import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  inputValue,
  handleChange,
  handleClick
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        input={inputValue}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default Input;
