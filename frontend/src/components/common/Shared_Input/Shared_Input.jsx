import { motion } from "framer-motion";
import React from "react";

export const Shared_Input = ({
  className,
  id,
  value,
  type = "text",
  placeholder,
  onChange,
  motionProps = {},
}) => {
  return (
    <motion.input
      className={className}
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...motionProps}
    />
  );
};
