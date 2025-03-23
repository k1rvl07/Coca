import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardOverview = ({ icon, name, description, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Image: Image } = components;
  return (
    <motion.div className="card-overview" {...motionProps}>
      <Image className="card-overview__icon" src={icon} alt="" />
      <Text type="body" className="card-overview__name text-card-overview-name">
        {name}
      </Text>
      <Text type="body" className="card-overview__description text-card-overview-description">
        {description}
      </Text>
    </motion.div>
  );
};
