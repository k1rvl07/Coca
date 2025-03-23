import { assets, components, content, hooks } from "@exports";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
  const { useScreenSize, useAnimatedIntersection } = hooks;
  const [showNav, setShowNav] = useState(false);
  const { width } = useScreenSize();

  const header = useAnimatedIntersection(0.2);

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
    <Section tagName="header" className="header" id="header" ref={header.targetRef}>
      <Link className="header__logo" href="/Coca">
        <Image
          className="header__logo-img"
          src={logo}
          alt="logo"
          motionProps={{
            initial: { opacity: 0, scale: 0.6 },
            animate: header.hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
      </Link>
      {width <= 1440 && (
        <Button className="header__button" onClick={toggleNav}>
          <AnimatePresence mode="wait">
            <Image
              key={showNav ? "close" : "burger"}
              src={showNav ? close : burger}
              alt={showNav ? "close" : "burger"}
              motionProps={{
                initial: { rotate: 0, opacity: 0 },
                animate: header.hasAnimated
                  ? { rotate: 360, opacity: 1 }
                  : { rotate: 0, opacity: 0 },
                exit: { rotate: -360, opacity: 0 },
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </Button>
      )}
      <Nav
        navData={HEADER_NAV}
        linkClassName="link-header-nav"
        motionProps={
          width > 1440
            ? {
                initial: { opacity: 0, x: -20 },
                animate: header.hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.5, ease: "easeOut" },
              }
            : {
                initial: { opacity: 0, y: -50, visibility: "hidden" },
                animate:
                  showNav && header.hasAnimated
                    ? { opacity: 1, y: 0, visibility: "visible" }
                    : { opacity: 0, y: -20, visibility: "hidden" },
                exit: { opacity: 0, y: -20, visibility: "hidden" },
                transition: { duration: 0.5, ease: "easeInOut" },
              }
        }
        itemMotion={{
          initial: { opacity: 0, x: -40 },
          animate: (i) => ({
            opacity: header.hasAnimated ? 1 : 0,
            x: header.hasAnimated ? 0 : -40,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
          }),
          exit: { opacity: 0, x: -20 },
        }}
      />
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={header.hasAnimated ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link className="header__contact link-arrow-underline" href="/Coca/#">
          Contact Us 🡪
        </Link>
      </motion.div>
    </Section>
  );
};
