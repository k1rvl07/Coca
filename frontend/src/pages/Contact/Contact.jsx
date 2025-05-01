import { assets, components, content, hooks } from "@exports";
import React from "react";

export const Contact = () => {
  const { CONTACT_CARD_CONTACT: CARD_CONTACT } = content;
  const { map } = assets;
  const {
    Shared_Box: Box,
    Shared_Text: Text,
    Shared_Image: Image,
    Shared_Section: Section,
    Contact_CardContact: CardContact,
  } = components;
  const { useSectionAnimation } = hooks;

  const sections = ["main"];
  const animations = sections.map(() => useSectionAnimation({ amount: 0.2, once: true }));
  const [mainAnimation] = animations;

  return (
    <main className="contact-page">
      <Section
        className="main"
        ref={mainAnimation.sectionRef}
        motionProps={{
          initial: { opacity: 0, y: 50 },
          animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
      >
        <Text
          as="h1"
          className="main__heading text-title-heading"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }}
        >
          Contact our team to find out more
        </Text>

        <Box
          className="main__map"
          motionProps={{
            initial: { opacity: 0, scale: 0.95 },
            animate: mainAnimation.isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 },
            transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
          }}
        >
          <Image className="main__image" src={map} />
          <Box className="main__address">
            <Box className="main__address-container">
              <Text className="main__address-global text-main-address-global">Yogja, INA</Text>
              <Text className="main__address-full text-main-address-full">
                100 Smith Street Collingwood VIC 3066 AU
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className="main__cards">
          {CARD_CONTACT.map((card, index) => (
            <CardContact
              key={card.id}
              {...card}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: mainAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                transition: { duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.15 },
              }}
            />
          ))}
        </Box>
      </Section>
    </main>
  );
};
