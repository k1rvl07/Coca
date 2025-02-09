import { components } from "@exports";
import React from "react";

export const Shared_Section = ({
  tagName: Tag = "section",
  className,
  id = className,
  children,
  isHasContainer = true,
}) => {
  const { Shared_Container: Container } = components;

  const content = <>{children}</>;

  return (
    <Tag id={id} className={className}>
      {isHasContainer ? (
        <Container>
          <div className={`${className}__container`}>{content}</div>
        </Container>
      ) : (
        content
      )}
    </Tag>
  );
};
