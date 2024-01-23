import React, { useEffect, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { API_TOKEN } from "@/config/app.config";
import trendingService from "@/services/trendingService";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import styles from "./TrendingFilter.module.scss";
import Image from "@/components/Image/Image";
import { TrendingResult } from "@/types/trending";
import { setTrendingDay } from "@/redux/slice.ts/trendingDaySlice";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/useApp";
import { addToWatchList } from "@/redux/slice.ts/watchListSlice";
import { setProgress } from "@/redux/slice.ts/progressSlice";
import { highlightedMovies } from "@/redux/slice.ts/watchListSlice";

const TrendingDay = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const watchList = useAppSelector((state) => state.watchList.watchList);
  const trendingDay = useAppSelector(
    (state) => state.trendingDay.trendingDayMovie
  );
  const progress = useAppSelector((state) => state.progress.progress);
  const highlightMovies = useAppSelector(
    (state) => state.watchList.highlightedMovies
  );
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const getTrendingDayData = useCallback(async () => {
    try {
      const trendingDayData = await trendingService.getTrendingDay(API_TOKEN);
      const trendingDayDataResults = trendingDayData.results;
      dispatch(setTrendingDay(trendingDayDataResults));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getTrendingDayData();
  }, [getTrendingDayData]);

  const handleAddToWatchList = useCallback(
    (movie: TrendingResult) => {
      const storedWatchList = localStorage.getItem("watchList");

      if (storedWatchList) {
        const parsedWatchList = JSON.parse(storedWatchList);
        const isMovieInLocalStorage = parsedWatchList.some(
          (item: TrendingResult) => item.id === movie.id
        );
        if (isMovieInLocalStorage) {
          toast.error("Movie Existing in WatchList");
          return;
        }
      }
      if (!isAuthenticated) {
        toast.warning("Please log in to add to WatchList.");

        setTimeout(() => {
          navigate("/signIn");
        }, 3000);
      } else {
        dispatch(addToWatchList(movie));
        dispatch(highlightedMovies(movie.id));
        dispatch(setProgress(100));
        toast.success("Added to WatchList");
      }

      const updatedWatchList = [...watchList, movie];
      localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    },
    [dispatch, watchList, isAuthenticated, navigate]
  );

  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {trendingDay && trendingDay.length > 0 ? (
          <>
            {trendingDay.map((result: TrendingResult, id: number) => {
              const isHighlighted = highlightMovies.includes(result.id);
              return (
                <div key={id} className={` ${styles["card-style-1"]}`}>
                  <div className={`${styles["card-img"]}`}>
                    <div className={`${styles["wrapper"]}`}>
                      <Link
                        to={`/movie/${result.id}`}
                        title={result.title}
                        className="w-[100%] h-[100%] inline-block"
                      >
                        <Image
                          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`}
                          fallback={
                            "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                          }
                          alt={result.title}
                          className="w-[100%] h-[100%] inline-block"
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <Tippy
                      content={
                        <DropdownMore
                          onAddToWatchList={() => handleAddToWatchList(result)}
                          isHighlight={isHighlighted}
                        />
                      }
                      placement="bottom"
                      animation="fade"
                      theme="light"
                      arrow={false}
                      trigger="click"
                      appendTo="parent"
                      interactive={true}
                    >
                      <div className={`${styles["options"]} `}>
                        <div>
                          <button
                            aria-haspopup="true"
                            className={`${styles["more-btn"]}`}
                          ></button>
                        </div>
                      </div>
                    </Tippy>
                    <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={true}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss={false}
                      draggable
                      pauseOnHover={false}
                      theme="colored"
                    />
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
                  <LoadingBar
                    color="#01b4e4"
                    progress={progress}
                    onLoaderFinished={() => dispatch(setProgress(0))}
                  />
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

export default TrendingDay;
