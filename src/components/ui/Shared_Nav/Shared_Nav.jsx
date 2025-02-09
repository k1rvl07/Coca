import { components } from "@exports";
import classnames from "classnames";
import React from "react";

export const Shared_Nav = ({ navData, className }) => {
  const { Shared_Link: Link } = components;
  const navClass = classnames(
    {
      nav: true,
    },
    className || "",
  );

  return (
    <nav className={navClass}>
      {navData.map((ulItem) => (
        <ul className="nav__list" key={ulItem.id}>
          {ulItem.items.map((liItem) => (
            <li className="nav__item" key={liItem.id}>
              <Link href={liItem.href} className="nav__link link-nav-black">
                {liItem.text}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
