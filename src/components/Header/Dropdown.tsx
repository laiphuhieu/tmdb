import React from "react";

import styles from "./Header.module.scss";

interface SubMenu {
  submenus: {
    title: string;
    url: string;
  }[];
}

const Dropdown = ({ submenus }: SubMenu) => {
  return (
    <ul className={`${styles["sub-nav"]}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={`${styles["sub-nav-list"]}`}>
          <a href={submenu.url} className={`${styles["sub-nav-item"]}`}>
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
