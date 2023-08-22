import React, { useCallback, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import styles from "./TrendingFilter.module.scss";
import trendingService from "@/services/trendingService";
import { TrendingResult } from "@/types/trending";
import { API_TOKEN } from "@/config/app.config";

const TrendingWeek = () => {
  const [trendingWeek, setTrendingWeek] = useState<TrendingResult[]>([]);

  const getTrendingWeekData = useCallback(async () => {
    try {
      const trendingWeekData = await trendingService.getTrendingWeek(API_TOKEN);
      const trendingWeekDataResults = trendingWeekData.results;
      setTrendingWeek(trendingWeekDataResults);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTrendingWeekData();
  }, [getTrendingWeekData]);

  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {trendingWeek && trendingWeek.length > 0 ? (
          <>
            {trendingWeek.map((result: TrendingResult, id: number) => {
              return (
                <div key={id} className={` ${styles["card-style-1"]}`}>
                  <div className={`${styles["card-img"]}`}>
                    <div className={`${styles["wrapper"]}`}>
                      <Link
                        to={`/movie/${result.id}`}
                        title={result.title}
                        className="w-[100%] h-[100%] inline-block"
                      >
                        <img
                          loading="lazy"
                          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`}
                          alt={result.title}
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
                        title={result.title}
                        className={`${styles["content-title"]}`}
                      >
                        {result.title}
                      </Link>
                    </h2>
                    <p>{result.release_date}</p>
                  </div>

                  <div className={`${styles["card-hover"]}`}></div>
                </div>
              );
            })}
          </>
        ) : (
          "no data"
        )}
      </div>
    </div>
  );
};

export default TrendingWeek;
