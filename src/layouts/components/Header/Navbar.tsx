import React from "react";

import { menuItems } from "./MenuItemLists";
import MenuItems from "./MenuItems";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className={`${styles["main-nav-item"]}`}>
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
