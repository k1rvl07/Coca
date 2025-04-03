import { motion } from "framer-motion";
import React from "react";

export const Shared_Text = ({ as = "p", className, children, custom, motionProps = {} }) => {
  const validTags = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div"];

  if (!validTags.includes(as)) {
    throw new Error(
      `Shared_Text: Invalid tag "${as}". ` + `Expected one of: ${validTags.join(", ")}`,
    );
  }

  const MotionTag = motion.create(as);

  return (
    <MotionTag className={className} custom={custom} {...motionProps}>
      {children}
    </MotionTag>
  );
};
