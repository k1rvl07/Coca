import { assets, components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_Advantage = ({ text, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Image: Image, Shared_Box: Box } = components;
  const { ok } = assets;
  return (
    <Box className="advantage" motionProps={{ ...motionProps }}>
      <Image className="advantage__image" src={ok} alt="ok" />
      <Text type="body" className="advantage__description text-advantage-description">
        {text}
      </Text>
    </Box>
  );
};
