import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardBenefit = ({ img, svg, heading, text, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Image: Image } = components;
  return (
    <motion.div className="card-benefit" {...motionProps}>
      <div className="card-benefit__image">
        <Image className="card-benefit__image-img" src={img} alt="" />
        <Image className="card-benefit__image-svg" src={svg} alt="" />
      </div>
      <div className="card-benefit__description">
        <Text
          type="body"
          className="card-benefit__description-heading text-card-benefit-description-heading"
        >
          {heading}
        </Text>
        <Text
          type="body"
          className="card-benefit__description-text text-card-benefit-description-text"
        >
          {text}
        </Text>
      </div>
    </motion.div>
  );
};
