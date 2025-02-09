import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Shared_Section = ({
  tagName: Tag = "section",
  className,
  id = className,
  children,
  isHasContainer = true,
  motionProps = {},
}) => {
  const { Shared_Container: Container } = components;

  const content = (
    <motion.div {...motionProps} className={`${className}__container`}>
      {children}
    </motion.div>
  );

  return (
    <Tag id={id} className={className}>
      {isHasContainer ? <Container>{content}</Container> : content}
    </Tag>
  );
};
