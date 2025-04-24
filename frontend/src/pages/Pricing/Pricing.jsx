import { components } from "@exports";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export const Pricing = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const {
    Shared_Section: Section,
    Shared_Text: Text,
    Shared_Input: Input,
    Shared_Label: Label,
  } = components;

  return (
    <main className="pricing-page">
      <Section className="main">
        <Text as="p" className="main__description text-main-description">
          Pricing plans 🤑
        </Text>
        <Text as="h1" className="main__title text-title-heading">
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
      </Section>
    </main>
  );
};
