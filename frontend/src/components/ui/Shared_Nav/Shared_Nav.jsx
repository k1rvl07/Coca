import { components } from "@exports";
import { motion } from "framer-motion";
import React from "react";

export const Shared_Nav = ({
  navData,
  linkClassName,
  titleClassName,
  motionProps = {},
  itemMotion = {},
  titleMotion = {},
}) => {
  const { Shared_Link: Link, Shared_Text: Text } = components;

  const renderNavItems = (items, startIndex) =>
    items.map((liItem, index) => (
      <motion.li className="nav__item" key={liItem.id} {...itemMotion} custom={startIndex + index}>
        <Link href={liItem.href} className={`nav__link ${linkClassName}`}>
          {liItem.text}
        </Link>
      </motion.li>
    ));

  let totalItems = 0;

  return (
    <motion.nav className="nav" {...motionProps}>
      {navData.map((ulItem) => {
        const itemsCount = ulItem.items.length;
        const startIndex = totalItems;
        totalItems += itemsCount;

        return (
          <div key={ulItem.id} className="nav__group">
            {ulItem.name && (
              <motion.div {...titleMotion} custom={startIndex - 1}>
                <Text className={`nav__title ${titleClassName}`}>{ulItem.name}</Text>
              </motion.div>
            )}
            <ul className="nav__list">{renderNavItems(ulItem.items, startIndex)}</ul>
          </div>
        );
      })}
    </motion.nav>
  );
};
