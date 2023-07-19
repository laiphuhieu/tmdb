import React from "react";
import styles from "./icons.module.scss";

export const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles["glyphicons-basic"]}`}
    viewBox="0 0 32 32"
  >
    <path
      fill="#ffffff"
      id="plus"
      d="M27,14v4a1,1,0,0,1-1,1H19v7a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V19H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h7V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7h7A1,1,0,0,1,27,14Z"
    />
  </svg>
);

export const Notification = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles["glyphicons-basic"]}`}
      viewBox="0 0 32 32"
      fill="white"
    >
      <path
        id="bell"
        d="M26,22.07037V23a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1v-.92963a2.00005,2.00005,0,0,1,.89062-1.66412l.32819-.21881A3.99993,3.99993,0,0,0,9,16.85925V13a7.00018,7.00018,0,0,1,5-6.70636V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6.31073a7.31386,7.31386,0,0,1,5,6.98273v3.56579a3.99993,3.99993,0,0,0,1.78119,3.32819l.32819.21881A2.00005,2.00005,0,0,1,26,22.07037ZM14,27a2,2,0,0,0,4,0V26H14Z"
      />
    </svg>
  );
};
