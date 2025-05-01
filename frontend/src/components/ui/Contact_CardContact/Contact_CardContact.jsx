import { components } from "@exports";
import React from "react";

export const Contact_CardContact = ({ name, description, info, motionProps = {} }) => {
  const { Shared_Box: Box, Shared_Text: Text } = components;
  return (
    <Box className="card-contact" motionProps={{ ...motionProps }}>
      <Text className="card-contact__name text-card-contact-name">{name}</Text>
      <Text className="card-contact__description text-card-contact-description">{description}</Text>
      <Text className="card-contact__info text-card-contact-info">{info}</Text>
    </Box>
  );
};
