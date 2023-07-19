import React from "react";
import { Link } from "react-router-dom";

import DropDown from "./Dropdown";
import styles from "./Header.module.scss";

interface MenuItem {
  items: {
    title: string;
    url: string;
    submenu: {
      title: string;
      url: string;
    }[];
  };
}

const MenuItems = ({ items }: MenuItem) => {
  return (
    <li className={`${styles["main-nav-list"]}`}>
      {items.submenu ? (
        <>
          <Link to="" className={`${styles["main-nav-link"]}`}>
            {items.title}
          </Link>
          <DropDown submenus={items.submenu} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
