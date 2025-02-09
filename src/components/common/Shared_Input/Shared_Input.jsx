import React from "react";

export const Shared_Input = ({ className, type = "text", placeholder }) => {
  return <input className={className} type={type} placeholder={placeholder} />;
};
