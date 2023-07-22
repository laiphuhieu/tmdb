import React, { useCallback, useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import styles from "./TrendingFilter.module.scss";

interface Item {
  title: string;
  id: number;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

const TrendingWeek = () => {
  const [trendingWeek, setTrendingWeek] = useState([]);

  const getItemWeek = useCallback(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/week", {
        params: { language: "vi" },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ4NzdiOGY2Y2Q5NjNhNjU5NGQ2OTFjNzdkMjc4MyIsInN1YiI6IjY0YWY2NWY3M2UyZWM4MDE0ZjRhZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY3Kb416Ey4F3SVm5FeHosO8eD9AdDYOYbw4N_jieUE`,
        },
      })
      .then((res) => {
        setTrendingWeek(res.data.results);
      });
  }, []);

  useEffect(() => {
    getItemWeek();
  }, [getItemWeek]);
  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {trendingWeek.map((result: Item, id: number) => {
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
                  <div className={`${styles["outer-ring"]}`}>
                    <div className={`${styles["user-score"]}`}>
                      <div className={`${styles["percent"]}`}>
                        <span>{Math.round(result.vote_average) * 10}</span>
                      </div>
                      <canvas
                        height="34"
                        width="34"
                        className={`${styles["canvas"]}`}
                      ></canvas>
                    </div>
                  </div>
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
      </div>
    </div>
  );
};

export default TrendingWeek;
