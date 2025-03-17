import { useCallback, useState } from "react";

export const useCarouselNavigation = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  return { currentIndex, handleNext, handlePrev };
};
