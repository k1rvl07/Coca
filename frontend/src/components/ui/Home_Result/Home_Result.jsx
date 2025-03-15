import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_Result = ({ number, description, motionProps = {} }) => {
  const { Shared_Text: Text } = components;
  return (
    <motion.div className="result" {...motionProps}>
      <Text type="body" className="result__number text-result-number">
        {number}
      </Text>
      <Text type="body" className="result__description text-result-description">
        {description}
      </Text>
    </motion.div>
  );
};
