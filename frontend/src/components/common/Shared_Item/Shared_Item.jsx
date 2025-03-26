import { motion } from "framer-motion";

export const Shared_Item = ({ children, className = "", motionProps = {}, custom }) => {
  return (
    <motion.li className={className} {...motionProps} custom={custom}>
      {children}
    </motion.li>
  );
};
