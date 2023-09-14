import React from 'react'

import styles from "./ShortcutBar.module.scss"

interface SubMenuProps {
    submenus: {
      title: string;
      url: string;
    }[];
  }

const ShortcutDropdown = ({submenus}: SubMenuProps) => {
    return (
        <ul className={`${styles["sc-sub-nav"]}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className={`${styles["sc-sub-nav-list"]}`}>
                    <a href={submenu.url} className={`${styles["sc-sub-nav-link"]}`}>
                        {submenu.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default ShortcutDropdown