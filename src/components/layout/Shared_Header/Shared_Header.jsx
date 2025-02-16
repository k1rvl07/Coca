import { assets, components, content, hooks } from "@exports";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Shared_Header = () => {
  const {
    Shared_Section: Section,
    Shared_Button: Button,
    Shared_Nav: Nav,
    Shared_Link: Link,
  } = components;
  const { logo, burger, close } = assets;
  const { SHARED_HEADER_LINKS: HEADER_LINKS } = content;
  const { useScreenSize, useIntersectionObserver } = hooks;
  const [showNav, setShowNav] = useState(false);
  const { width } = useScreenSize();

  const { targetRef: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);

  useEffect(() => {
    if (isHeaderVisible && !hasAnimatedHeader) {
      setHasAnimatedHeader(true);
    }
  }, [isHeaderVisible, hasAnimatedHeader]);

  useEffect(() => {
    if (width > 1440) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [width]);

  const toggleNav = () => {
    if (width <= 1440) {
      setShowNav(!showNav);
    }
  };

  return (
    <Section tagName="header" className="header" id="header" ref={headerRef}>
      <Link className="header__logo" href="/">
        <motion.img
          className="header__logo-img"
          src={logo}
          alt="logo"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={hasAnimatedHeader ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </Link>
      {width <= 1440 && (
        <Button className="header__button" onClick={toggleNav}>
          <AnimatePresence mode="wait">
            <motion.img
              key={showNav ? "close" : "burger"}
              src={showNav ? close : burger}
              alt={showNav ? "close" : "burger"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={hasAnimatedHeader ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }}
              exit={{ rotate: -360, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </Button>
      )}
      <Nav
        navData={HEADER_LINKS}
        className="nav"
        motionProps={
          width > 1440
            ? {
                initial: { opacity: 0, x: -20 },
                animate: hasAnimatedHeader ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.5, ease: "easeOut" },
              }
            : {
                initial: { opacity: 0, y: -50, visibility: "hidden" },
                animate:
                  showNav && hasAnimatedHeader
                    ? { opacity: 1, y: 0, visibility: "visible" }
                    : { opacity: 0, y: -20, visibility: "hidden" },
                exit: { opacity: 0, y: -20, visibility: "hidden" },
                transition: { duration: 0.4, ease: "easeInOut" },
              }
        }
        itemMotion={{
          initial: { opacity: 0, x: -40 },
          animate: (i) => ({
            opacity: hasAnimatedHeader ? 1 : 0,
            x: hasAnimatedHeader ? 0 : -40,
            transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
          }),
          exit: { opacity: 0, x: -20 },
        }}
      />
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={hasAnimatedHeader ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Link className="header__contact link-arrow-underline" href="/contact">
          Contact Us 🡪
        </Link>
      </motion.div>
    </Section>
  );
};
