import { assets, components, content, hooks } from "@exports";
import React from "react";

export const Shared_SectionSponsors = () => {
  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Image: Image,
    Shared_Box: Box,
  } = components;
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
        subheading="some big companies that we work with, and trust us very much"
        subheadingClass="text-title-subheading-small"
        isSubheadingLine={false}
        motionProps={{
          initial: { opacity: 0, x: -50 },
          animate: sectionAnimation.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      />

      <Box
        className="sponsor__images"
        motionProps={{
          initial: { opacity: 0, y: 30 },
          animate: sectionAnimation.hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
        }}
      >
        {SPONSORS.map((sponsor, index) => (
          <Image
            key={sponsor.id}
            className="sponsor__image"
            src={assets[sponsor.img]}
            alt="sponsor"
            motionProps={{
              initial: { opacity: 0, scale: 0.9 },
              animate: sectionAnimation.hasAnimated
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 },
              transition: { duration: 0.8, ease: "easeOut", delay: 0.6 + index * 0.15 },
            }}
          />
        ))}
      </Box>
    </Section>
  );
};
