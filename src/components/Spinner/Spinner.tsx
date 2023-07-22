import React from "react";

import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={`${styles["spinner-container"]}`}>
      <span className={`${styles["spinner-text"]}`}></span>
      <div className={`${styles["spinner-img"]}`}></div>
    </div>
  );
};

export default Spinner;
