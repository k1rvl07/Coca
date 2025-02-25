import { assets, components, content, hooks } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Shared_SectionSponsors = () => {
  const { Shared_Section: Section, Shared_Title: Title } = components;
  const { SHARED_SECTION_SPONSORS: SPONSORS } = content;
  const { useAnimatedIntersection } = hooks;

  const sectionAnimation = useAnimatedIntersection(0.2);

  return (
    <Section
      tagName="section"
      className="sponsor"
      motionProps={{
        ref: sectionAnimation.targetRef,
        initial: { opacity: 0, y: 50 },
        animate: sectionAnimation.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      }}
    >
      <Title
        heading="890+"
        headingTag="h2"
        headingClass="text-title-heading-second-black"
        subHeading="some big companies that we work with, and trust us very much"
        subHeadingClass="text-title-subheading-small"
        isSubheadingLine={false}
        motionProps={{
          initial: { opacity: 0, x: -50 },
          animate: sectionAnimation.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      />

      <motion.div
        className="sponsor__images"
        initial={{ opacity: 0, y: 30 }}
        animate={sectionAnimation.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {SPONSORS.map((sponsor, index) => (
          <motion.img
            key={sponsor.id}
            className="sponsor__image"
            src={assets[sponsor.img]}
            alt="sponsor"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              sectionAnimation.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.15 }}
          />
        ))}
      </motion.div>
    </Section>
  );
};
