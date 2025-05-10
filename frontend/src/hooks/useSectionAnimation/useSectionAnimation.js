import { useInView } from "framer-motion";
import { useRef } from "react";

export const useSectionAnimation = (options = {}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, options);

  return { sectionRef, isInView };
};
