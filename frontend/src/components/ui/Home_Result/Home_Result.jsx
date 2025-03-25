import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_Result = ({ number, description, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Box: Box } = components;
  return (
    <Box className="result" motionProps={{ ...motionProps }}>
      <Text type="body" className="result__number text-result-number">
        {number}
      </Text>
      <Text type="body" className="result__description text-result-description">
        {description}
      </Text>
    </Box>
  );
};
