import { assets, components } from "@exports";
import classnames from "classnames";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardSalesReport = ({ name, price, percent, color, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Image: Image, Shared_Box: Box } = components;
  const { up, down } = assets;
  return (
    <Box className="card-sales-report" motionProps={{ ...motionProps }}>
      <Text as="p" className="card-sales-report__name text-card-sales-report-name">
        {name}
      </Text>
      <Text as="p" className="card-sales-report__price text-card-sales-report-price">
        {price}
      </Text>
      <Text
        as="p"
        className={classnames("card-sales-report__percent", {
          "text-card-sales-report-percent-down": color === "red",
          "text-card-sales-report-percent-up": color === "green",
        })}
      >
        <Image src={color === "green" ? up : down} className="card-sales-report__icon" alt="" />{" "}
        {percent}
        <Text as="span" className="card-sales-report__period text-card-sales-report-period">
          from last year
        </Text>
      </Text>
    </Box>
  );
};
