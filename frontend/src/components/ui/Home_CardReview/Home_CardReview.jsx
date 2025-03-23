import { assets, components, hooks } from "@exports";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const Home_CardReview = ({ reviews, reviewsAnimation, onUpdateIndex, motionProps = {} }) => {
  const { star } = assets;
  const { Shared_Text: Text, Shared_Arrows: Arrows, Shared_Image: Image } = components;
  const { useCarouselNavigation } = hooks;
  const { hasAnimated } = reviewsAnimation;

  const { currentIndex, handleNext, handlePrev } = useCarouselNavigation(reviews);

  const [arrowsVisible, setArrowsVisible] = useState(false);

  useEffect(() => {
    if (hasAnimated) {
      setArrowsVisible(true);
    }
  }, [hasAnimated]);

  useEffect(() => {
    onUpdateIndex(currentIndex);
  }, [currentIndex, onUpdateIndex]);

  const currentReview = reviews[currentIndex];

  const starsIndexes = [1, 2, 3, 4, 5];

  return (
    <motion.div
      className="card-review"
      {...motionProps}
      initial={{ opacity: 0, scale: 0.95, x: -20 }}
      animate={hasAnimated ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: -20 }}
      exit={{ opacity: 0, scale: 0.95, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card-review__rating"
        key={`${currentIndex}-rating`}
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={hasAnimated ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: -20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="card-review__stars">
          {Array.from({ length: currentReview.starCount }, (_, index) => (
            <Image
              className="card-review__star"
              key={starsIndexes[index]}
              src={star}
              alt="star"
              motionProps={{
                initial: { opacity: 0, scale: 0.8, x: -20 },
                animate: hasAnimated
                  ? { opacity: 1, scale: 1.2, x: 0 }
                  : { opacity: 0, scale: 0.8, x: -20 },
                transition: { duration: 0.5, delay: 0.3 + index * 0.1 },
              }}
            />
          ))}
        </div>
        <Text className="card-review__star-count text-card-review-star-count">
          {currentReview.starCount}.0
        </Text>
      </motion.div>

      <motion.div
        className="card-review__text"
        key={`${currentIndex}-text`}
        initial={{ opacity: 0, x: -20 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Text type="body" className="card-review__text text-card-review-text">
          {currentReview.text}
        </Text>
      </motion.div>

      <motion.div
        className="card-review__author"
        key={`${currentIndex}-author`}
        initial={{ opacity: 0, x: -20 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Image
          className="card-review__author-image"
          src={assets[currentReview.image]}
          alt=""
          motionProps={{
            initial: { opacity: 0, x: -20 },
            animate: hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
            transition: { duration: 0.5, delay: 0.9 },
          }}
        />
        <motion.div
          className="card-review__author-info"
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Text type="body" className="card-review__author-name text-card-review-author-name">
            {currentReview.author}
          </Text>
          <Text type="body" className="card-review__author-role text-card-review-author-role">
            {currentReview.role}
          </Text>
        </motion.div>
      </motion.div>

      <motion.div
        className="card-review__arrows"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={arrowsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Arrows
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={currentIndex === 0}
          isLast={currentIndex === reviews.length - 1}
        />
      </motion.div>
    </motion.div>
  );
};
