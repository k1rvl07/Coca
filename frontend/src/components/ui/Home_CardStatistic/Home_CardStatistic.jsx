import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardStatistic = ({
  name,
  description,
  exchange,
  price,
  percent,
  icon,
  motionProps = {},
}) => {
  const { Shared_Text: Text, Shared_Image: Image, Shared_Box: Box } = components;
  const words = description.split(" ");

  const firstWord = words[0];
  const secondWord = words[1];
  const restOfText = words.slice(2).join(" ");
  return (
    <Box className="card-statistic" motionProps={{ ...motionProps }}>
      <Image className="card-statistic__exchange" src={exchange} alt="" />
      <Box className="card-statistic__info">
        <Text as="p" className="card-statistic__name text-card-statistic-name">
          {name}
        </Text>
        <Box className="card-statistic__price-percent">
          <Text as="p" className="card-statistic__price text-card-statistic-price">
            {price}
          </Text>
          <Text as="p" className="card-statistic__percent text-card-statistic-percent">
            <span>
              <Image className="card-statistic__icon" src={icon} alt="" />
            </span>
            {percent}
          </Text>
        </Box>
        <Text as="p" className="card-statistic__description text-card-statistic-description">
          {firstWord} <b>{secondWord}</b> {restOfText}
        </Text>
      </Box>
    </Box>
  );
};
