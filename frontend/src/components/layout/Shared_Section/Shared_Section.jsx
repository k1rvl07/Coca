import { components } from "@exports";
import { forwardRef } from "react";

export const Shared_Section = forwardRef(
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
    const { Shared_Container: Container, Shared_Box: Box } = components;

    const content = (
      <Box motionProps={{ ...motionProps }} className={`${className}__container`}>
        {children}
      </Box>
    );

    return (
      <Tag id={id} className={className} ref={ref}>
        {isHasContainer ? <Container>{content}</Container> : content}
      </Tag>
    );
  },
);

Shared_Section.displayName = "Shared_Section";
