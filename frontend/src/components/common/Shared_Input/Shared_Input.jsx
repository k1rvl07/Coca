import React from "react";

export const Shared_Input = ({ className, value, type = "text", placeholder, onChange }) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
