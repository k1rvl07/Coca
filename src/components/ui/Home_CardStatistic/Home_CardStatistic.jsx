import { components } from "@exports";
import React from "react";

export const Home_CardStatistic = ({ name, description, exchange, price, percent, icon }) => {
  const { Shared_Text: Text } = components;
  const words = description.split(" ");

  const firstWord = words[0];
  const secondWord = words[1];
  const restOfText = words.slice(2).join(" ");
  return (
    <>
      <img className="card-statistic__exchange" src={exchange} alt="" />
      <div className="card-statistic__info">
        <Text type="body" className="card-statistic__name text-card-statistic-name">
          {name}
        </Text>
        <div className="card-statistic__price-percent">
          <Text type="body" className="card-statistic__price text-card-statistic-price">
            {price}
          </Text>
          <Text type="body" className="card-statistic__percent text-card-statistic-percent">
            <span>
              <img className="card-statistic__icon" src={icon} alt="" />
            </span>
            {percent}
          </Text>
        </div>
        <Text type="body" className="card-statistic__description text-card-statistic-description">
          {firstWord} <b>{secondWord}</b> {restOfText}
        </Text>
      </div>
    </>
  );
};
