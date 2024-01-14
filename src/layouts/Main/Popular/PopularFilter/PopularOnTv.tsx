import React, { useCallback, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import styles from "./PopularFilter.module.scss";
import popularService from "@/services/popularService";
import { API_TOKEN } from "@/config/app.config";
import { PopularResult } from "@/types/popular";

const PopularOnTv = () => {
  const [PopularTv, setPopularTv] = useState<PopularResult[]>([]);

  const getPopularOnTvData = useCallback(async () => {
    try {
      const popularOnTvData = await popularService.getPopularOnTv(API_TOKEN);
      setPopularTv(popularOnTvData.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPopularOnTvData();
  }, [getPopularOnTvData]);
  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {PopularTv.map((result: PopularResult, id: number) => {
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
                  // content={<DropdownMore />}
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
                    <div className={`${styles["circular-text"]}`}>
                      <span>
                        <span className="text-white text-[13px] font-extrabold">
                          {Math.round(result.vote_average) * 10}
                        </span>
                        <sup className="text-[7px] text-white">%</sup>
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

              <div className={`${styles["card-hover"]}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularOnTv;
