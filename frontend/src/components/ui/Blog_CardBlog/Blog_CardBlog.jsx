import { components } from "@exports";
import React from "react";

export const Blog_CardBlog = ({ img, date, creator, name, text, href, motionProps = {} }) => {
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
    <Box className="card-blog" motionProps={{ ...motionProps }}>
      <Image className="card-blog__image" src={img} alt="" />
      <Box className="card-blog__info">
        <Text as="p" className="card-blog__description text-card-blog-description">
          Publish in Insight {formatDate(date)}
        </Text>
        <Text as="p" className="card-blog__description text-card-blog-description">
          by : {creator}
        </Text>
      </Box>
      <Link href={href} className="card-blog__name link-card-blog-name">
        {name}
      </Link>
      <Text as="p" className="card-blog__text text-card-blog-text">
        {text}
      </Text>
    </Box>
  );
};
