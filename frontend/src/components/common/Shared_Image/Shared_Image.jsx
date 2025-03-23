import { motion } from "framer-motion";
import React from "react";

export const Shared_Image = ({ className, src, alt = "", draggable = false, motionProps = {} }) => {
  return (
    <motion.img className={className} src={src} alt={alt} draggable={draggable} {...motionProps} />
  );
};
