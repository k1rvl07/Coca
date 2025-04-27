import { assets, components } from "@exports";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const Pricing_Question = ({ question, answer, motionProps = {} }) => {
  const {
    Shared_Text: Text,
    Shared_Image: Image,
    Shared_Box: Box,
    Shared_Button: Button,
  } = components;
  const { plus, minus } = assets;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box className="question" motionProps={{ ...motionProps }}>
      <Text as="p" className="question__title text-question-title">
        {question}
      </Text>

      <Button className="question__button" onClick={toggleAnswer}>
        <AnimatePresence mode="wait">
          <Image
            key={isOpen ? "minus" : "plus"}
            className="question__image"
            src={isOpen ? minus : plus}
            alt=""
            motionProps={{
              initial: { rotate: isOpen ? -360 : 360, opacity: 0 },
              animate: { rotate: 0, opacity: 1 },
              exit: { rotate: isOpen ? 360 : -360, opacity: 0 },
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          />
        </AnimatePresence>
      </Button>

      <Text
        as="p"
        className="question__answer text-question-answer"
        motionProps={{
          initial: { height: 0, opacity: 0 },
          animate: {
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? "12px" : "0px",
          },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.8, ease: "easeInOut" },
          style: { overflow: "hidden" },
        }}
      >
        {answer}
      </Text>
    </Box>
  );
};
