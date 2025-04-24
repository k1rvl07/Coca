import { motion } from "framer-motion";
import React from "react";

export const Shared_Label = ({ children, className = "", motionProps = {} }) => {
  return (
    <motion.label className={className} {...motionProps}>
      {children}
    </motion.label>
  );
};
