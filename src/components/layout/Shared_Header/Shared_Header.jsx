import { assets, components, content, hooks } from "@exports";
import React from "react";
import { useEffect, useState } from "react";

export const Shared_Header = () => {
  const {
    Shared_Section: Section,
    Shared_Button: Button,
    Shared_Nav: Nav,
    Shared_Link: Link,
  } = components;
  const { logo, burger, close } = assets;
  const { SHARED_HEADER_LINKS: HEADER_LINKS } = content;
  const { useScreenSize } = hooks;
  const [showNav, setShowNav] = useState(false);
  const { width } = useScreenSize();

  useEffect(() => {
    if (width > 1440) {
      setShowNav(false);
    }
  }, [width]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navClass = showNav || width > 1440 ? "nav--show" : "";

  return (
    <Section tagName="header" className="header" id="header">
      <Link className="header__logo" href="/">
        <img className="header__logo-img" src={logo} alt="logo" />
      </Link>
      <Button className="header__button" onClick={toggleNav}>
        <img
          className={showNav ? "header__close" : "header__burger"}
          src={showNav ? close : burger}
          alt={showNav ? "close" : "burger"}
        />
      </Button>
      <Nav navData={HEADER_LINKS} className={navClass} />
      <Link className="header__contact link-arrow-underline">Contact Us 🡪</Link>
    </Section>
  );
};
