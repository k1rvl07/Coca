import { motion } from "framer-motion";
import React from "react";

export const Shared_Text = ({
  type = "body",
  headingTag = "h1",
  className,
  children,
  motionProps = {},
}) => {
  if (type === "body") {
    return (
      <motion.p className={className} {...motionProps}>
        {children}
      </motion.p>
    );
  }
  if (type === "heading") {
    const Tag = motion.create(headingTag);
    return (
      <Tag className={className} {...motionProps}>
        {children}
      </Tag>
    );
  }
  if (type === "span") {
    return (
      <motion.span className={className} {...motionProps}>
        {children}
      </motion.span>
    );
  }
  console.error(`Unknown type: ${type}`);
  return null;
};
