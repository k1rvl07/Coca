import { components } from "@exports";
import React from "react";

export const Home_CardOverview = ({ icon, name, description, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Image: Image, Shared_Box: Box } = components;
  return (
    <Box className="card-overview" motionProps={{ ...motionProps }}>
      <Image className="card-overview__icon" src={icon} alt="" />
      <Text type="body" className="card-overview__name text-card-overview-name">
        {name}
      </Text>
      <Text type="body" className="card-overview__description text-card-overview-description">
        {description}
      </Text>
    </Box>
  );
};
