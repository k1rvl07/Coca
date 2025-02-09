import classnames from "classnames";
import React from "react";

export const Shared_Text = ({ type = "body", headingTag = "h1", className, children }) => {
  if (type === "body") {
    return <p className={className}>{children}</p>;
  }
  if (type === "heading") {
    const Tag = headingTag;
    return <Tag className={className}>{children}</Tag>;
  }
  if (type === "span") {
    return <span className={className}>{children}</span>;
  }
  console.error(`Unknown type: ${type}`);
  return null;
};
