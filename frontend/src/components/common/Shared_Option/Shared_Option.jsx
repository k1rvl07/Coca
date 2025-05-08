import { motion } from "framer-motion";
import React from "react";
export const Shared_Option = ({ classname, value, children, motionProps = {} }) => {
  return (
    <motion.option className={classname} value={value} {...motionProps}>
      {children}
    </motion.option>
  );
};
