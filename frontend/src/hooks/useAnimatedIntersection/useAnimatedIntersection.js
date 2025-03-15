import { hooks } from "@exports";
import { useEffect, useState } from "react";

export const useAnimatedIntersection = (threshold) => {
  const { useIntersectionObserver } = hooks;
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  return { targetRef, hasAnimated };
};
