import { components, hooks } from "@exports";
import React, { Children, isValidElement } from "react";

export const Shared_Slider = ({ children, motionProps = {}, draggerClass }) => {
  const { Shared_Box: Box } = components;
  const { useSlider } = hooks;

  const { slidesRef, windowRef } = useSlider(draggerClass);

  return (
    <Box className="slider" motionProps={{ ...motionProps }}>
      <Box className="slider__window" ref={windowRef}>
        <Box className="slider__slides" ref={slidesRef}>
          {Children.map(children, (child) => {
            if (isValidElement(child) && child.props["data-no-slide"]) {
              return child;
            }
            return isValidElement(child) ? <Box className="slider__slide">{child}</Box> : null;
          })}
        </Box>
      </Box>
    </Box>
  );
};
