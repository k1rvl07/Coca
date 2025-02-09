import { assets, components } from "@exports";
import classnames from "classnames";
import React from "react";

export const Home_CardStatistic = ({ name, price, percent, color }) => {
  const { Shared_Text: Text } = components;
  const { up, down } = assets;
  return (
    <>
      <Text type="body" className="card-statistic__name text-card-statistic-name">
        {name}
      </Text>
      <Text type="body" className="card-statistic__price text-card-statistic-price">
        {price}
      </Text>
      <Text
        type="body"
        className={classnames("card-statistic__percent", {
          "text-card-statistic-percent-down": color === "red",
          "text-card-statistic-percent-up": color === "green",
        })}
      >
        {" "}
        <img src={color === "green" ? up : down} className="card-statistic__icon" alt="" />{" "}
        {percent}
        <Text type="span" className="card-statistic__period text-card-statistic-period">
          from last year
        </Text>
      </Text>
    </>
  );
};
