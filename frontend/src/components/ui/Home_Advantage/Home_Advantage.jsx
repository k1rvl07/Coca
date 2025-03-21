import { assets, components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_Advantage = ({ text, motionProps = {} }) => {
  const { Shared_Text: Text } = components;
  const { ok } = assets;
  return (
    <motion.div className="advantage" {...motionProps}>
      <img className="advantage__image" src={ok} alt="ok" />
      <Text type="body" className="advantage__description text-advantage-description">
        {text}
      </Text>
    </motion.div>
  );
};
