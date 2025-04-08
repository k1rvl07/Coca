import { motion } from "framer-motion";
import React from "react";

export const Shared_Button = ({
  type,
  className,
  disabled,
  onClick,
  children,
  style,
  motionProps = {},
}) => {
  return (
    <motion.button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};
