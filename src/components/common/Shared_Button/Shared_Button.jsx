import React from "react";

export const Shared_Button = ({ type, className, disabled, onClick, children }) => {
  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
