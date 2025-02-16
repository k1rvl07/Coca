import { components } from "@exports";
import classnames from "classnames";
import { motion } from "framer-motion";
import React from "react";

export const Shared_Nav = ({ navData, className, motionProps = {}, itemMotion = {} }) => {
  const { Shared_Link: Link } = components;
  const navClass = classnames("nav", className);

  return (
    <motion.nav className={navClass} {...motionProps}>
      {navData.map((ulItem) => (
        <ul className="nav__list" key={ulItem.id}>
          {ulItem.items.map((liItem, index) => (
            <motion.li className="nav__item" key={liItem.id} {...itemMotion} custom={index}>
              <Link href={liItem.href} className="nav__link link-nav-black">
                {liItem.text}
              </Link>
            </motion.li>
          ))}
        </ul>
      ))}
    </motion.nav>
  );
};
