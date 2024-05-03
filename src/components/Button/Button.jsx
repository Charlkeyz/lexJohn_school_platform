/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
  const { className, children, onClick, type } = props;

  return (
    <button
      className={`bg-secondary text-white w-hug h-hug p-3 gap-2 rounded-md font-sans ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
