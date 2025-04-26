import { motion } from "framer-motion";
import React, { memo } from "react";

const MotionComponents = {
  ul: motion.ul,
  ol: motion.ol,
};

export const Shared_List = memo(({ as = "ul", children, className = "", motionProps = {} }) => {
  const MotionList = MotionComponents[as];

  if (!MotionList) {
    throw new Error(
      `Shared_List: Invalid tag "${as}". ` +
        `Expected one of: ${Object.keys(MotionComponents).join(", ")}`,
    );
  }

  return (
    <MotionList className={className} {...motionProps}>
      {children}
    </MotionList>
  );
});
