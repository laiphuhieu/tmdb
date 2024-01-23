import React from "react";
import styles from "./DropdownLists.module.scss";
import { Link } from "react-router-dom";

const DropdownLists = () => {
  return (
    <div className={`${styles["drop-list-container"]}`}>
      <p className={`${styles["drop-list"]}`}>
        <Link to="/movie/new">Add New Movie</Link>
      </p>
      <p className={`${styles["drop-list"]}`}>
        <Link to="/tv/new">Add New TV Show</Link>
      </p>
    </div>
  );
};

export default DropdownLists;
