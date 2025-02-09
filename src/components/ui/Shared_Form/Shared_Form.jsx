import React from "react";

export const Shared_Form = ({ className, children }) => {
  return (
    <form action="" className={className}>
      {children}
    </form>
  );
};
