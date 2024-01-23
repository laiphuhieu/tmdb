import React from "react";

import styles from "./DropdownMore.module.scss";
import { Link } from "react-router-dom";

interface DropdownMoreProps {
  onAddToWatchList: () => void;
  isHighlight: boolean;
}

const DropdownMore = ({ onAddToWatchList, isHighlight }: DropdownMoreProps) => {
  return (
    <div className={`${styles["more"]} `}>
      <div className={`${styles["more-container"]}`}>
        <div
          className={`${styles["group"]} ${styles["no-border"]} ${
            isHighlight ? "bg-red text-white" : ""
          }`}
        >
          <div className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]} `}>
              <span className={`${styles["list-btn"]} `}></span>
              <button onClick={onAddToWatchList}>Add to list</button>
            </Link>
          </div>
        </div>
        <div className={`${styles["group"]}`}>
          <div className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span
                className={`${styles["heart-btn"]} 
          `}
              ></span>
              <button>Favorite</button>
            </Link>
          </div>
        </div>
        <div className={`${styles["group"]}`}>
          <div className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["bookmark-btn"]} `}></span>
              <button>Watchlist</button>
            </Link>
          </div>
        </div>
        <div className={`${styles["group"]}`}>
          <div className={`${styles["more-content"]}`}>
            <Link to="/" className={`${styles["list"]}`}>
              <span className={`${styles["rating-btn"]}`}></span>
              Your rating
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMore;
