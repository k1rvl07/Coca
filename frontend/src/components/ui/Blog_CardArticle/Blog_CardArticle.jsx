import { components } from "@exports";
import React from "react";

export const Blog_CardArticle = ({ img, title, description, href, motionProps = {} }) => {
  const {
    Shared_Box: Box,
    Shared_Image: Image,
    Shared_Text: Text,
    Shared_Button: Button,
    Shared_Link: Link,
  } = components;
  return (
    <Box className="card-article" motionProps={{ ...motionProps }}>
      <Image className="card-article__image" src={img} />
      <Text className="card-article__title text-card-article-title">{title}</Text>
      <Text className="card-article__description text-card-article-description ">
        {description}
      </Text>
      <Link href={href}>
        <Button className="card-article__button button-article">Read More</Button>
      </Link>
    </Box>
  );
};
