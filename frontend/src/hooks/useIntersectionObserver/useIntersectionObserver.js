import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin },
    );

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return { targetRef, isIntersecting };
};
