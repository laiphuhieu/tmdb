import React from "react";

import styles from "./DropdownProfile.module.scss";
import { Link } from "react-router-dom";

const DropdownProfile = () => {
  return (
    <div className={`${styles["setting-container"]}`}>
      <div className={`${styles["group"]}`}>
        <h2>
          <Link to="/laiphuhieu">laiphuhieu</Link>
        </h2>
        <p>
          <Link to="/user/laiphuhieu">Xem hồ sơ</Link>
        </p>
      </div>
      <div className={`${styles["group"]}`}>
        <p>
          <Link to="/user/laiphuhieu/discussions">Thảo luận</Link>
        </p>
        <p>
          <Link to="/user/laiphuhieu/lists">Danh sách</Link>
        </p>
        <p>
          <Link to="/user/laiphuhieu/ratings">Xếp hạng</Link>
        </p>
        <p>
          <Link to="/user/laiphuhieu/watchlist">Danh sách theo dõi</Link>
        </p>
      </div>
      <div className={`${styles["group"]}`}>
        <p>
          <Link to="/settings/profile">Chỉnh sửa hồ sơ</Link>
        </p>
        <p>
          <Link to="/settings/account">Cài đặt</Link>
        </p>
      </div>
      <div className={`${styles["group"]}`}>
        <p>
          <Link to="/logout">Đăng xuất</Link>
        </p>
      </div>
    </div>
  );
};

export default DropdownProfile;
