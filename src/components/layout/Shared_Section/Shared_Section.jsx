import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Shared_Section = React.forwardRef(
  (
    {
      tagName: Tag = "section",
      className,
      id = className,
      children,
      isHasContainer = true,
      motionProps = {},
    },
    ref,
  ) => {
    const { Shared_Container: Container } = components;

    const content = (
      <motion.div {...motionProps} className={`${className}__container`}>
        {children}
      </motion.div>
    );

    return (
      <Tag id={id} className={className} ref={ref}>
        {isHasContainer ? <Container>{content}</Container> : content}
      </Tag>
    );
  },
);

Shared_Section.displayName = "Shared_Section";
