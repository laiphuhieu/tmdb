import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { PlusIcon, Notification } from "../icons/icons";
import DropdownLists from "../Dropdown/DropdownLists/DropdownLists";
import DropdownNotification from "../Dropdown/DropdownNotification/DropdownNotification";
import DropdownProfile from "../Dropdown/DropdownProfile/DropdownProfile";

const Header = () => {
  return (
    <header className={`${styles["header"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["content"]}`}>
          <div className={`${styles["nav-area-left"]}`}>
            <Link to="/" className="logo">
              <Logo className="w-[154px] h-[20px] mr-[16px]" />
            </Link>
            <Navbar />
          </div>

          <div className={`${styles["nav-area-right"]}`}>
            <ul className={`${styles["button-container"]}`}>
              <li className={`${styles["new-button"]}`}>
                <Tippy
                  content={<DropdownLists />}
                  placement="bottom"
                  animation="fade"
                  arrow={true}
                  theme="light"
                  trigger="focusin"
                  touch={true}
                  appendTo="parent"
                  interactive={true}
                >
                  <button aria-haspopup="true">
                    <PlusIcon />
                  </button>
                </Tippy>
              </li>

              <li className="ml-[30px]">
                <div className={`${styles["language"]}`}>vi</div>
              </li>

              <li className="ml-[30px]">
                <Tippy
                  content={<DropdownNotification />}
                  placement="bottom"
                  animation="fade"
                  arrow={true}
                  theme="light"
                  trigger="focusin"
                  touch={true}
                  appendTo="parent"
                  interactive={true}
                >
                  <button aria-haspopup="true">
                    <Notification />
                    <div className={`${styles["badge"]}`}>1</div>
                  </button>
                </Tippy>
              </li>

              <li className="ml-[30px] profile">
                <Tippy
                  content="Hồ sơ và cài đặt"
                  placement="bottom"
                  arrow={true}
                  animation="fade"
                  theme="light"
                  interactive={true}
                  className={`${styles["profile-tooltip"]}`}
                >
                  <Tippy
                    content={<DropdownProfile />}
                    placement="bottom"
                    animation="fade"
                    arrow={true}
                    theme="light"
                    trigger="focusin"
                    touch={true}
                    appendTo="parent"
                    interactive={true}
                  >
                    <button aria-haspopup="true">
                      <img
                        src="https://secure.gravatar.com/avatar/0985e75c8a7c5267eb71ae991b8ac655.jpg?s=32"
                        alt="avatar"
                        className="translate-y-[3px] rounded-[50%]"
                      />
                    </button>
                  </Tippy>
                </Tippy>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
