import { motion } from "framer-motion";
import React, { memo } from "react";

export const Shared_Label = memo(({ children, htmlFor, className = "", motionProps = {} }) => {
  return (
    <motion.label className={className} htmlFor={htmlFor} {...motionProps}>
      {children}
    </motion.label>
  );
});

Shared_Label.displayName = "Shared_Label";
