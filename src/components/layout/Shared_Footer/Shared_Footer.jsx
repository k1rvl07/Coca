import { assets, components, content } from "@exports";
import React from "react";

export const Shared_Footer = () => {
  const {
    Shared_Section: Section,
    Shared_Title: Title,
    Shared_Button: Button,
    Shared_Text: Text,
    Shared_Nav: Nav,
    Shared_Link: Link,
  } = components;
  const { logo_white } = assets;
  const {
    SHARED_FOOTER_NAV: FOOTER_NAV,
    SHARED_FOOTER_SOCIAL_ICONS: FOOTER_SOCIAL_ICONS,
    SHARED_FOOTER_LINKS: FOOTER_LINKS,
  } = content;
  return (
    <Section tagName="footer" className="footer">
      <Title
        heading="Think beyond the wave"
        headingTag="h2"
        headingClass="text-title-heading-footer"
        subheading="Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help"
        subheadingClass="text-title-subheading-footer"
        subheadingLineColor="white"
      />
      <Button type="button" className="footer__button button-white text-button-white">
        Try for free
      </Button>
      <div className="footer__company">
        <Link className="footer__company-link" href="/Coca/#">
          <img className="footer__logo" src={logo_white} alt="" />
        </Link>
        <Text className="footer__slogan text-footer-slogan">
          We built an elegant solution. Our team created a fully integrated sales and marketing
          solution for SMBs
        </Text>
      </div>
      <Nav
        navData={FOOTER_NAV}
        linkClassName="text-footer-nav-link"
        titleClassName="text-footer-nav-title"
      />
      <hr className="footer__line" />
      <div className="footer__icons">
        {FOOTER_SOCIAL_ICONS.map((icon) => (
          <Link className="footer__icon-link" href={icon.href} key={icon.id}>
            <img className="footer__icon-img" src={assets[icon.img]} alt="" />
          </Link>
        ))}
      </div>
      <div className="footer__links">
        {FOOTER_LINKS.map((link) => (
          <Link className="footer__link text-footer-link" href={link.href} key={link.id}>
            {link.text}
          </Link>
        ))}
      </div>
      <Text className="footer__copyright text-footer-copyright">
        © Copyright 2023,t All Rights Reserved
      </Text>
    </Section>
  );
};
