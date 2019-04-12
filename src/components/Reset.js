import React from "react";

const Reset = ({ label, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default Reset;
