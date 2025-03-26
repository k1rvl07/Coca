import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardNews = ({ img, date, creator, name, href, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Link: Link, Shared_Image: Image, Shared_Box: Box } = components;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Box className="card-news" motionProps={{ ...motionProps }}>
      <Image className="card-news__image" src={img} alt="" />
      <Box className="card-news__info">
        <Text as="p" className="card-news__description text-card-news-description">
          Publish in Insight {formatDate(date)}
        </Text>
        <Text as="p" className="card-news__description text-card-news-description">
          by : {creator}
        </Text>
      </Box>
      <Link href={href} className="card-news__name link-card-news-name">
        {name}
      </Link>
    </Box>
  );
};
