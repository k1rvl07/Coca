import { motion } from "framer-motion";
import React from "react";

export const Shared_Line = ({ className, motionProps = {} }) => {
  return <motion.hr className={className} {...motionProps} />;
};
