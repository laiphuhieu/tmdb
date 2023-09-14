import React from "react";

import { Link } from "react-router-dom";

import ShortcutDropdown from "./ShortcutDropdown";
import styles from "./ShortcutBar.module.scss"

interface ShortcutBarProps {
  items: {
    title: string;
    url: string;
    submenu: {
      title: string;
      url: string;
    }[];
  };
}

const ShortcutItems = ({ items }: ShortcutBarProps) => {
  return (
    <li className= {`${styles["sc-nav-list"]}`} >
      {items.submenu ? (
        <>
          <Link to="" className={`${styles["sc-nav-link"]}`}>{items.title}</Link>
          <ShortcutDropdown submenus={items.submenu}/>
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default ShortcutItems;
