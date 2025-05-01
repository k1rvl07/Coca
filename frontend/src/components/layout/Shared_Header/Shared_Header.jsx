import { assets, components, content, hooks } from "@exports";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Shared_Header = () => {
  const {
    Shared_Section: Section,
    Shared_Button: Button,
    Shared_Nav: Nav,
    Shared_Link: Link,
    Shared_Image: Image,
  } = components;
  const { logo, burger, close } = assets;
  const { SHARED_HEADER_NAV: HEADER_NAV } = content;
  const { useSectionAnimation } = hooks;
  const [showNav, setShowNav] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1440 });
  const { sectionRef, isInView } = useSectionAnimation({ amount: 0.2, once: true });

  const toggleNav = () => {
    if (isMobile) {
      setShowNav(!showNav);
    }
  };

  return (
    <Section
      tagName="header"
      className="header"
      id="header"
      ref={sectionRef}
      motionProps={{
        initial: { opacity: 0, y: -50 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 },
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <Link
        className="header__logo"
        href="/Coca"
        motionProps={{
          initial: { opacity: 0, x: -20 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
          transition: { duration: 0.5, delay: 0.3 },
        }}
      >
        <Image className="header__logo-img" src={logo} alt="logo" />
      </Link>

      {isMobile && (
        <Button
          className="header__button"
          onClick={toggleNav}
          motionProps={{
            initial: { opacity: 0, x: 20 },
            animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <AnimatePresence mode="wait">
            <Image
              key={showNav ? "close" : "burger"}
              src={showNav ? close : burger}
              alt={showNav ? "close" : "burger"}
              motionProps={{
                initial: { rotate: 0, opacity: 0 },
                animate: { rotate: 360, opacity: 1 },
                exit: { rotate: -360, opacity: 0 },
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </Button>
      )}

      <AnimatePresence>
        {(!isMobile || showNav) && (
          <Nav
            navData={HEADER_NAV}
            linkClassName="link-header-nav"
            motionProps={{
              initial: { opacity: 0, y: -20, height: 0 },
              animate: {
                opacity: 1,
                y: 0,
                height: "auto",
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                  when: "beforeChildren",
                },
              },
              exit: {
                opacity: 0,
                y: -20,
                height: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                  when: "afterChildren",
                },
              },
            }}
            itemMotion={{
              initial: { opacity: 0, x: !isMobile ? -40 : 0, y: !isMobile ? 0 : -40 },
              animate: (i) => ({
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }),
              exit: (i) => ({
                opacity: 0,
                y: -20,
                transition: {
                  delay: (HEADER_NAV.length - 1 - i) * 0.05,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }),
            }}
          />
        )}
      </AnimatePresence>

      <Link
        className="header__contact link-arrow-underline"
        href="/Coca/Contact"
        motionProps={{
          initial: { opacity: 0, x: 20 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 },
          transition: { duration: 0.5, delay: 0.8 },
        }}
      >
        Contact Us 🡪
      </Link>
    </Section>
  );
};
