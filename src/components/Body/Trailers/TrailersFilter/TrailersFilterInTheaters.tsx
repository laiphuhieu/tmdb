import React, { useCallback, useEffect, useState } from "react";

import styles from "./TrailersFilter.module.scss";
import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";

import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

interface ItemTv {
  id: number;
  poster_path: string;
  original_title: string;
  title: string;
}

const TrailersFilterInTheater = () => {
  const [trailersOnTv, setTrailersInTheater] = useState([]);

  const getItemOnTv = useCallback(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: { language: "vi" },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ4NzdiOGY2Y2Q5NjNhNjU5NGQ2OTFjNzdkMjc4MyIsInN1YiI6IjY0YWY2NWY3M2UyZWM4MDE0ZjRhZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY3Kb416Ey4F3SVm5FeHosO8eD9AdDYOYbw4N_jieUE`,
        },
      })
      .then((res) => {
        setTrailersInTheater(res.data.results);
      });
  }, []);

  useEffect(() => {
    getItemOnTv();
  }, [getItemOnTv]);
  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {trailersOnTv.map((result: ItemTv, id: number) => {
          return (
            <div key={id} className={`${styles["card-style-2"]}`}>
              <div className={`${styles["card-img"]}`}>
                <div className={`${styles["wrapper"]}`}>
                  <Link to={`/tv/${result.id}`} title={result.original_title}>
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
                <h2 className="text-center text-[19.2px]">
                  <Link
                    to={`/tv/${result.id}`}
                    title={result.title}
                    className={`${styles["content-title"]}`}
                  >
                    {result.title}
                  </Link>
                </h2>
                <h3 className="text-center text-[16px]">{result.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrailersFilterInTheater;
