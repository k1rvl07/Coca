import { motion } from "framer-motion";
import React, { Children } from "react";

export const Shared_Slider = ({ children, motionProps = {} }) => {
  return (
    <motion.div className="slider" {...motionProps}>
      <div className="slider__window">
        <div className="slider__slides">
          {Children.map(children, (child) => {
            if (child.props["data-no-slide"]) {
              return child;
            }
            return <div className="slider__slide">{child}</div>;
          })}
        </div>
      </div>
    </motion.div>
  );
};
