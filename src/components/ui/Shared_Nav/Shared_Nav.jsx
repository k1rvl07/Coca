import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Shared_Nav = ({
  navData,
  linkClassName,
  titleClassName,
  motionProps = {},
  itemMotion = {},
}) => {
  const { Shared_Link: Link, Shared_Text: Text } = components;

  const renderNavItems = (items) =>
    items.map((liItem, index) => (
      <motion.li className="nav__item" key={liItem.id} {...itemMotion} custom={index}>
        <Link href={liItem.href} className={`nav__link ${linkClassName}`}>
          {liItem.text}
        </Link>
      </motion.li>
    ));

  return (
    <motion.nav className="nav" {...motionProps}>
      {navData.map((ulItem) => (
        <div key={ulItem.id} className="nav__group">
          {ulItem.name && <Text className={`nav__title ${titleClassName}`}>{ulItem.name}</Text>}
          <ul className="nav__list">{renderNavItems(ulItem.items)}</ul>
        </div>
      ))}
    </motion.nav>
  );
};
