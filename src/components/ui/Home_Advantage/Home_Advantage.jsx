import { assets, components } from "@exports";
import React from "react";

export const Home_Advantage = ({ text }) => {
  const { Shared_Text: Text } = components;
  const { ok } = assets;
  return (
    <>
      <img className="advantage__image" src={ok} alt="ok" />
      <Text type="body" className="advantage__description text-advantage-description">
        {text}
      </Text>
    </>
  );
};
