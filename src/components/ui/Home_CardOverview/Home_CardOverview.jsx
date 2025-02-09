import { components } from "@exports";
import React from "react";

export const Home_CardOverview = ({ icon, name, description }) => {
  const { Shared_Text: Text } = components;
  return (
    <>
      <img className="card-overview__icon" src={icon} alt="" />
      <Text type="body" className="card-overview__name text-card-overview-name">
        {name}
      </Text>
      <Text type="body" className="card-overview__description text-card-overview-description">
        {description}
      </Text>
    </>
  );
};
