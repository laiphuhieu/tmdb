import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import { PlusIcon, Notification } from "../../../components/icons/icons";
import { ReactComponent as SearchBtn } from "@/assets/images/searchBlue.svg";
import DropdownLists from "../../../components/Dropdown/DropdownLists/DropdownLists";
import DropdownNotification from "../../../components/Dropdown/DropdownNotification/DropdownNotification";
import DropdownProfile from "../../../components/Dropdown/DropdownProfile/DropdownProfile";
import Search from "./Search";
import searchService from "@/services/searchService";
import { API_TOKEN } from "@/config/app.config";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/useApp";
import { setMovies } from "@/redux/slice.ts/movieSlice";
import ConfirmModal from "@/components/ModalConfirm/ModalConfirm";

const HeaderLoggedIn = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movie);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = useCallback(() => {
    setIsOpen(true);
  }, []);

  const navigate = useNavigate();

  const handleConfirmSignOut = useCallback(async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("watchList");
      navigate(0);

      toast.success("Logged out successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false);
  }, [navigate]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleFetchData = useCallback(async () => {
    try {
      const moviesData = await searchService.getSearchAll(API_TOKEN);
      dispatch(setMovies(moviesData.results));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

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
                    content={<DropdownProfile handleLogOut={handleLogOut} />}
                    placement="bottom"
                    animation="fade"
                    arrow={true}
                    theme="light"
                    hideOnClick={true}
                    trigger="click"
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

              <li className="ml-[30px] flex">
                <Tippy
                  content={<Search moviesFetch={movies} />}
                  placement="bottom"
                  maxWidth="100%"
                  animation="fade"
                  arrow={false}
                  theme="light"
                  touch={true}
                  trigger="click"
                  hideOnClick={true}
                  interactive={true}
                >
                  <button aria-haspopup="true">
                    <SearchBtn
                      className="w-[29.11px] h-[29.11px]"
                      onClick={handleFetchData}
                    />
                  </button>
                </Tippy>
              </li>
            </ul>
            <ConfirmModal
              isOpen={isOpen}
              onConfirm={handleConfirmSignOut}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderLoggedIn;
