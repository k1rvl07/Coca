import { assets, components } from "@exports";
import React from "react";

export const Shared_Title = ({ heading, headingClass, subHeading, subHeadingClass }) => {
  const { Shared_Text: Text } = components;
  const { subheading_line } = assets;
  return (
    <div className="title">
      <Text type="heading" tag="h1" className={`title__heading ${headingClass}`}>
        {heading}
      </Text>
      <Text type="body" className={`title__subheading ${subHeadingClass}`}>
        <img className="title__subheading-line" src={subheading_line} alt="subheading_line" />
        {subHeading}
      </Text>
    </div>
  );
};
