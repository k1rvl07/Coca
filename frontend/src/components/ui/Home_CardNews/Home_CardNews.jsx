import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Home_CardNews = ({ img, date, creator, name, href, motionProps = {} }) => {
  const { Shared_Text: Text, Shared_Link: Link } = components;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.div className="card-news" {...motionProps}>
      <img className="card-news__image" src={img} alt="" />
      <div className="card-news__info">
        <Text type="body" className="card-news__description text-card-news-description">
          Publish in Insight {formatDate(date)}
        </Text>
        <Text type="body" className="card-news__description text-card-news-description">
          by : {creator}
        </Text>
      </div>
      <Link href={href} className="card-news__name link-card-news-name">
        {name}
      </Link>
    </motion.div>
  );
};
