import { motion } from "framer-motion";
import React from "react";

export const Shared_Select = ({ classname, value, onChange, children, motionProps = {} }) => {
  return (
    <motion.select className={classname} value={value} onChange={onChange} {...motionProps}>
      {children}
    </motion.select>
  );
};
