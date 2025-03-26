import { motion } from "framer-motion";
import React from "react";

export const Shared_List = ({ as = "ul", children, className = "", motionProps = {} }) => {
  const validTags = ["ul", "ol"];

  if (!validTags.includes(as)) {
    throw new Error(
      `Shared_List: Invalid tag "${as}". ` + `Expected one of: ${validTags.join(", ")}`,
    );
  }

  const MotionList = motion.create(as);

  return (
    <MotionList className={className} {...motionProps}>
      {children}
    </MotionList>
  );
};
