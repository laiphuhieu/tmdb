import React from "react";

import styles from "./DropdownNotification.module.scss";
import { Link } from "react-router-dom";

const DropdownNotification = () => {
  return (
    <div className={`${styles["noti-container"]}`}>
      <div className={`${styles["noti-content"]}`}>
        <h2>
          Unread Notifications <span>0</span>
        </h2>
        <p>
          Good job! Looks like you are all caught up.{" "}
          <Link
            to="./user/event/notifications"
            className={`${styles["view-all"]}`}
          >
            View All
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DropdownNotification;
