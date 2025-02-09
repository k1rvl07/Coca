import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver({ threshold = 0.1, root = null, rootMargin = "0px" } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold, root, rootMargin },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return { targetRef, isIntersecting };
}
