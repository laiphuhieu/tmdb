import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import styles from "./Header.module.scss";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import { PlusIcon } from "../../../components/icons/icons";
import DropdownLists from "../../../components/Dropdown/DropdownLists/DropdownLists";
import Search from "./Search";
import { ReactComponent as SearchBtn } from "@/assets/images/searchBlue.svg";
import searchService from "@/services/searchService";
import { API_TOKEN } from "@/config/app.config";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/useApp";
import { setMovies } from "@/redux/slice.ts/movieSlice";

const HeaderLoggedOut = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movie);

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
                <button>
                  <Link to={"/signIn"}>Đăng nhập</Link>
                </button>
              </li>

              <li className="ml-[30px]">
                <button>
                  <Link to={"/register"}>Tham gia TMDB</Link>
                </button>
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderLoggedOut;
