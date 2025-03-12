import { motion } from "framer-motion";
import React from "react";

export const Shared_Link = ({ className, href = "#", children, motionProps = {} }) => {
  return (
    <motion.a href={href} className={className} {...motionProps}>
      {children}
    </motion.a>
  );
};
