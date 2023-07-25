import React, { useCallback, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import styles from "./PopularFilter.module.scss";
import popularService from "@/services/popularService";
import { API_TOKEN } from "@/config/app.config";
import { PopularResult } from "@/types/popular";

const PopularInTheater = () => {
  const [PopularTheater, setPopularInTheater] = useState<PopularResult[]>([]);

  const getPopularInTheatersData = useCallback(async () => {
    try {
      const popularInTheaterData = await popularService.getPopularInTheaters(
        API_TOKEN
      );
      setPopularInTheater(popularInTheaterData.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPopularInTheatersData();
  }, [getPopularInTheatersData]);
  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {PopularTheater.map((result: PopularResult, id: number) => {
          return (
            <div key={id} className={` ${styles["card-style-1"]}`}>
              <div className={`${styles["card-img"]}`}>
                <div className={`${styles["wrapper"]}`}>
                  <Link
                    to={`/movie/${result.id}`}
                    title={result.name}
                    className="w-[100%] h-[100%] inline-block"
                  >
                    <img
                      loading="lazy"
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`}
                      alt={result.name}
                      className="w-[100%] h-[100%] inline-block "
                    />
                  </Link>
                </div>
                <Tippy
                  content={<DropdownMore />}
                  placement="bottom"
                  animation="fade"
                  theme="light"
                  arrow={false}
                  trigger="click"
                  appendTo="parent"
                  interactive={true}
                >
                  <div className={`${styles["options"]}`}>
                    <div>
                      <button
                        aria-haspopup="true"
                        className={`${styles["more-btn"]}`}
                      ></button>
                    </div>
                  </div>
                </Tippy>
              </div>

              <div className={`${styles["card-content"]}`}>
                <div className={`${styles["consensus"]}`}>
                  <CircularProgressbarWithChildren
                    value={Math.round(result.vote_average) * 10}
                    className={`${styles["circular-bar"]}`}
                  >
                    <div
                      className={`${styles["circular-text"]}`}
                      style={{
                        fontSize: "13px",
                        color: "#fff",
                        fontWeight: "500",
                      }}
                    >
                      <span>
                        <strong>{Math.round(result.vote_average) * 10}</strong>
                        <sup style={{ fontSize: "7px" }}>%</sup>
                      </span>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <h2>
                  <Link
                    to={`/movie/${result.id}`}
                    title={result.name}
                    className={`${styles["content-title"]}`}
                  >
                    {result.name}
                  </Link>
                </h2>
                <p>{result.first_air_date}</p>
              </div>

              <div className={`${styles["card-hover"]}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularInTheater;
