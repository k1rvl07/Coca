import classnames from "classnames";
import React from "react";

export const Shared_Button = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
