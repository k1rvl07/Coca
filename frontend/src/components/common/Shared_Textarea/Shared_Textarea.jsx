import { motion } from "framer-motion";
import React from "react";

export const Shared_Textarea = ({
  className,
  id,
  placeholder,
  onChange,
  maxLength,
  motionProps = {},
}) => {
  return (
    <motion.textarea
      className={className}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      {...motionProps}
    />
  );
};
