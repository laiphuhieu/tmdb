import React from "react";

import styles from "./DropdownProfile.module.scss";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownProfile = ({ handleLogOut }: any) => {
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
          <Link to="/watchlist">Danh sách</Link>
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
          <button onClick={handleLogOut}>Đăng xuất</button>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default DropdownProfile;
