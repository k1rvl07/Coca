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
  const {
    Shared_Link: Link,
    Shared_Text: Text,
    Shared_Box: Box,
    Shared_List: List,
    Shared_Item: Item,
  } = components;

  const renderNavItems = (items, startIndex) =>
    items.map((liItem, index) => (
      <Item key={liItem.id} motionProps={{ ...itemMotion }} custom={startIndex + index}>
        <Link href={liItem.href} className={`nav__link ${linkClassName}`}>
          {liItem.text}
        </Link>
      </Item>
    ));

  let totalItems = 0;

  return (
    <motion.nav className="nav" {...motionProps}>
      {navData.map((ulItem) => {
        const itemsCount = ulItem.items.length;
        const startIndex = totalItems;
        totalItems += itemsCount;

        return (
          <Box key={ulItem.id} className="nav__group">
            {ulItem.name && (
              <Text
                className={`nav__title ${titleClassName}`}
                motionProps={{ ...titleMotion }}
                custom={startIndex - 1}
              >
                {ulItem.name}
              </Text>
            )}
            <List className="nav__list">{renderNavItems(ulItem.items, startIndex)}</List>
          </Box>
        );
      })}
    </motion.nav>
  );
};
