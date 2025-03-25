import { components } from "@exports";
import React from "react";

export const Shared_Container = ({ children }) => {
  const { Shared_Box: Box } = components;
  return <Box className="container">{children}</Box>;
};
