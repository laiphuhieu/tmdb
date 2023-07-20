import React from "react";

import styles from "./DropdownMore.module.scss";
import { Link } from "react-router-dom";

const DropdownMore = () => {
  return (
    <div className={`${styles["more"]}`}>
      <div className={`${styles["more-container"]}`}>
        <div className={`${styles["group"]} ${styles["no-border"]}`}>
          <p className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["list-btn"]}`}></span>
              Add to list
            </Link>
          </p>
        </div>
        <div className={`${styles["group"]}`}>
          <p className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["heart-btn"]}`}></span>
              Favorite
            </Link>
          </p>
        </div>
        <div className={`${styles["group"]}`}>
          <p className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["bookmark-btn"]}`}></span>
              Favorite
            </Link>
          </p>
        </div>
        <div className={`${styles["group"]}`}>
          <p className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["rating-btn"]}`}></span>
              Favorite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMore;
