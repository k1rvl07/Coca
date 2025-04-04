import { assets, components, content, hooks } from "@exports";
import React from "react";

export const Shared_Footer = () => {
  const { useSectionAnimation } = hooks;
  const { sectionRef, isInView } = useSectionAnimation({ amount: 0.2, once: true });

  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Button: Button,
    Shared_Text: Text,
    Shared_Nav: Nav,
    Shared_Link: Link,
    Shared_Image: Image,
    Shared_Line: Line,
    Shared_Box: Box,
  } = components;
  const { logo_white } = assets;
  const {
    SHARED_FOOTER_NAV: FOOTER_NAV,
    SHARED_FOOTER_SOCIAL_ICONS: FOOTER_SOCIAL_ICONS,
    SHARED_FOOTER_LINKS: FOOTER_LINKS,
  } = content;

  return (
    <Section
      tagName="footer"
      className="footer"
      ref={sectionRef}
      motionProps={{
        initial: { opacity: 0, y: 50 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      }}
    >
      <Title
        heading="Think beyond the wave"
        headingTag="h2"
        headingClass="text-title-heading-footer"
        subheading="Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help"
        subheadingClass="text-title-subheading-footer"
        subheadingLineColor="white"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.3 },
        }}
      />
      <Button type="button" className="footer__button button-white text-button-white">
        Try for free
      </Button>
      <Box
        className="footer__company"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        <Link
          className="footer__company-link"
          href="/Coca/#"
          motionProps={{
            initial: { opacity: 0, x: -20 },
            animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
            transition: { duration: 0.5, delay: 0.6 },
          }}
        >
          <Image className="footer__logo" src={logo_white} alt="" />
        </Link>
        <Text
          className="footer__slogan text-footer-slogan"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.5, delay: 0.7 },
          }}
        >
          We built an elegant solution. Our team created a fully integrated sales and marketing
          solution for SMBs
        </Text>
      </Box>
      <Nav
        navData={FOOTER_NAV}
        linkClassName="link-footer-nav"
        titleClassName="text-footer-nav-title"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 1.0 },
        }}
        itemMotion={{
          initial: { opacity: 0, x: -40 },
          animate: (i) => ({
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -40,
            transition: { delay: 1.0 + i * 0.125, duration: 0.6, ease: "easeOut" },
          }),
          exit: { opacity: 0, x: -20 },
        }}
        titleMotion={{
          initial: { opacity: 0, x: -40 },
          animate: (i) => ({
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -40,
            transition: { delay: 1.0 + i * 0.125, duration: 0.6, ease: "easeOut" },
          }),
          exit: { opacity: 0, x: -20 },
        }}
      />
      <Line
        className="footer__line"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 1.0 },
        }}
      />
      <Box
        className="footer__icons"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 1.0 },
        }}
      >
        {FOOTER_SOCIAL_ICONS.map((icon, index) => (
          <Link
            className="footer__icon-link"
            href={icon.href}
            key={icon.id}
            motionProps={{
              initial: { opacity: 0, x: -20 },
              animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
              transition: { duration: 0.5, delay: 1.1 + index * 0.1 },
            }}
          >
            <Image className="footer__icon-img" src={assets[icon.img]} alt="" />
          </Link>
        ))}
      </Box>
      <Box
        className="footer__links"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 1.1 },
        }}
      >
        {FOOTER_LINKS.map((link, index) => (
          <Link
            className="footer__link link-footer-link"
            href={link.href}
            key={link.id}
            motionProps={{
              initial: { opacity: 0, x: -20 },
              animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
              transition: { duration: 0.5, delay: 1.3 + index * 0.1 },
            }}
          >
            {link.text}
          </Link>
        ))}
      </Box>
      <Text
        className="footer__copyright text-footer-copyright"
        motionProps={{
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay: 1.4 },
        }}
      >
        © Copyright 2023, All Rights Reserved
      </Text>
    </Section>
  );
};
