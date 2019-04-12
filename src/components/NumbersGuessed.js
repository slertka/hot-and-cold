import React from "react";

const NumbersGuessed = ({ guessArr }) => {
  const numString = guessArr.sort((a, b) => a - b).join(", ");
  return <div>{numString}</div>;
};

export default NumbersGuessed;
