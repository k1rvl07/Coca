import { components, hooks } from "@exports";
import React, { Children } from "react";

export const Shared_Slider = ({ children, motionProps = {}, draggerClass }) => {
  const { Shared_Box: Box } = components;
  const { useSlider } = hooks;

  const { slidesRef, windowRef } = useSlider(draggerClass);

  return (
    <Box className="slider" motionProps={{ ...motionProps }}>
      <Box className="slider__window" ref={windowRef}>
        <Box className="slider__slides" ref={slidesRef}>
          {Children.map(children, (child) => {
            if (child.props["data-no-slide"]) {
              return child;
            }
            return <Box className="slider__slide">{child}</Box>;
          })}
        </Box>
      </Box>
    </Box>
  );
};
