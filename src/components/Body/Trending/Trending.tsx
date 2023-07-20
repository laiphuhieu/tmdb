import React, { useState, useCallback, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";

import styles from "./Trending.module.scss";
// import useGetAccessToken from "@/custom-hooks/useGetAccessToken";

interface Item {
  title: string;
  id: number;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
}

const Trending = () => {
  const [trendingDay, setTrendingDay] = useState([]);
  // const [trendingWeek, setTrendingWeek] = useState([]);
  // const token = useGetAccessToken();

  const getItemDay = useCallback(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day", {
        params: { language: "vi" },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ4NzdiOGY2Y2Q5NjNhNjU5NGQ2OTFjNzdkMjc4MyIsInN1YiI6IjY0YWY2NWY3M2UyZWM4MDE0ZjRhZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY3Kb416Ey4F3SVm5FeHosO8eD9AdDYOYbw4N_jieUE`,
        },
      })
      .then((res) => {
        setTrendingDay(res.data.results);
      });
  }, []);

  // const getItemWeek = useCallback(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/trending/movie/week", {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ4NzdiOGY2Y2Q5NjNhNjU5NGQ2OTFjNzdkMjc4MyIsInN1YiI6IjY0YWY2NWY3M2UyZWM4MDE0ZjRhZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY3Kb416Ey4F3SVm5FeHosO8eD9AdDYOYbw4N_jieUE`,
  //       },
  //     })
  //     .then((res) => {
  //       setTrendingWeek(res.data.results);
  //     });
  // }, []);

  useEffect(() => {
    getItemDay();
    // getItemWeek();
  }, [getItemDay]);

  return (
    <section className={`${styles["inner-content"]} ${styles["trending"]} `}>
      {/* {trendingDay.map((result: Item, id: number) => {
        return (
          <ul key={id}>
            <li>{result.title}</li>
            <li>{result.id}</li>
            <li>{result.release_date}</li>
            <li>{Math.round(result.vote_average) * 10}</li>
          </ul>
        );
      })}

      {trendingWeek.map((result: Item, id: number) => {
        return (
          <ul key={id}>
            <li>{result.title}</li>
          </ul>
        );
      })} */}
      <div className={`${styles["column-container"]}`}>
        <div className={`${styles["column"]}`}>
          <div className={`${styles["column-header"]}`}>
            <h2>Trending</h2>
            <div className={`${styles["selector-container"]}`}>
              <div className={`${styles["selector"]}`}>
                <div className={`${styles["anchor"]}`}></div>
                <div className={`${styles["anchor"]}`}></div>
              </div>
            </div>
          </div>

          <div className={`${styles["scroll-wrap"]}`}>
            <div
              className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}
            >
              {trendingDay.map((result: Item, id: number) => {
                return (
                  <div key={id} className={` ${styles["card-style-1"]}`}>
                    <div className={`${styles["card-img"]}`}>
                      <div className={`${styles["wrapper"]}`}>
                        <Link to={`/movie/${result.id}`} title={result.title}>
                          <img src={result.backdrop_path} alt={result.title} />
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
                              <span>
                                {Math.round(result.vote_average) * 10}
                              </span>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
