import { motion } from "framer-motion";
import React from "react";

export const Shared_Form = ({ className, children, onSubmit, action, motionProps = {} }) => {
  return (
    <motion.form action={action} className={className} onSubmit={onSubmit} {...motionProps}>
      {children}
    </motion.form>
  );
};
