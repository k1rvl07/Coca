import { motion } from "framer-motion";
import React from "react";

export const Shared_Form = ({ className, children, motionProps }) => {
  return (
    <motion.form action="" className={className} {...motionProps}>
      {children}
    </motion.form>
  );
};
