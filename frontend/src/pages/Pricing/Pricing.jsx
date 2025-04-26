import { assets, components, content, hooks } from "@exports";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Pricing = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const {
    Shared_Section: Section,
    Shared_Text: Text,
    Shared_Input: Input,
    Shared_Label: Label,
    Shared_Box: Box,
    Pricing_CardPricing: CardPricing,
  } = components;
  const { PRICING_MAIN_CARD_PRICING: CARD_PRICING } = content;
  const { useSectionAnimation } = hooks;

  const sections = ["main"];
  const animations = sections.map(() => useSectionAnimation({ amount: 0.2, once: true }));
  const [mainAnimation] = animations;

  return (
    <main className="pricing-page">
      <Section
        className="main"
        ref={mainAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Text as="p" className="main__description text-main-description">
          Pricing plans 🤑
        </Text>
        <Text
          as="h1"
          className="main__title text-title-heading"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }}
        >
          Choose a plan for a more advanced business
        </Text>
        <Label className="main__label">
          <Input
            className="main__checkbox"
            type="checkbox"
            checked={isSwitchOn}
            onChange={() => setIsSwitchOn(!isSwitchOn)}
          />
          <AnimatePresence mode="wait">
            <Text
              as="span"
              className="main__label-text text-main-label"
              key={isSwitchOn ? "active" : "inactive"}
              motionProps={{
                initial: { color: "#7E8492" },
                animate: { color: isSwitchOn ? "#1463FF" : "#7E8492" },
                exit: { color: "#7E8492" },
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              Annual pricing (save 20%)
            </Text>
          </AnimatePresence>
        </Label>
        <Box className="main__cards">
          {CARD_PRICING.map((card, index) => (
            <CardPricing
              key={card.id}
              isInView={mainAnimation.isInView}
              {...card}
              price={isSwitchOn ? (card.price / 100) * 80 : card.price}
              icon={assets[card.icon]}
              index={index}
              isSwitchOn={isSwitchOn}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                transition: { duration: 0.5, ease: "easeOut", delay: 0.4 + index * 0.25 },
              }}
            />
          ))}
        </Box>
      </Section>
    </main>
  );
};
