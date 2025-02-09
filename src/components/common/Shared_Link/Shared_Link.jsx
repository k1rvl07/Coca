import classnames from "classnames";
import React from "react";

export const Shared_Link = ({ className, href = "#", children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
