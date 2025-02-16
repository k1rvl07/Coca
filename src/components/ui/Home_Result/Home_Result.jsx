import { components } from "@exports";
import React from "react";

export const Home_Result = ({ number, description }) => {
  const { Shared_Text: Text } = components;
  return (
    <>
      <Text type="body" className="result__number text-result-number">
        {number}
      </Text>
      <Text type="body" className="result__description text-result-description">
        {description}
      </Text>
    </>
  );
};
