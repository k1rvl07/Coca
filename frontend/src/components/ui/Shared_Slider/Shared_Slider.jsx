import { motion } from "framer-motion";
import React, { Children, useRef, useState, useEffect, useCallback } from "react";

export const Shared_Slider = ({ children, motionProps = {}, draggerClass }) => {
  const slidesRef = useRef(null);
  const windowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback(
    (e) => {
      if (e.target.classList.contains(draggerClass)) {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(windowRef.current.scrollLeft);
      }
    },
    [draggerClass],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) {
        return;
      }
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1;
      windowRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;
    const window = windowRef.current;

    if (slides && window) {
      slides.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (slides && window) {
        slides.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]);

  return (
    <motion.div className="slider" {...motionProps}>
      <div className="slider__window" ref={windowRef}>
        <div className="slider__slides" ref={slidesRef}>
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
