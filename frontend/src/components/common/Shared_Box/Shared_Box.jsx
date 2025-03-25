import { motion } from "framer-motion";
import React, { forwardRef } from "react";

export const Shared_Box = forwardRef(({ children, className, motionProps = {} }, ref) => {
  return (
    <motion.div className={className} ref={ref} {...motionProps}>
      {children}
    </motion.div>
  );
});

Shared_Box.displayName = "Shared_Box";
