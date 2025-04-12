import { components } from "@exports";
import React from "react";

export const Blog_CardReport = ({ img, link, href, description, motionProps = {} }) => {
  const { Shared_Box: Box, Shared_Image: Image, Shared_Link: Link, Shared_Text: Text } = components;
  return (
    <Box className="card-report" motionProps={{ ...motionProps }}>
      <Image className="card-report__image" src={img} />
      <Link className="card-report__link link-card-report-link" href={href}>
        {link}
      </Link>
      <Text className="card-report__description text-card-report-description" as="p">
        {description}
      </Text>
    </Box>
  );
};
