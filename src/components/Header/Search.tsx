import React, { useState, useEffect, useCallback } from "react";

import trendingService from "@/services/trendingService";
import { TrendingResult } from "@/types/trending";
import { API_TOKEN } from "@/config/app.config";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as SearchBtn } from "../../assets/images/search.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow-up.svg";

const Search = () => {
  //   const [search, setSearch] = useState<TrendingResult[]>([]);

  //   const getTrendingSearchData = useCallback(async () => {
  //     try {
  //       const trendingSearchData = await trendingService.getTrendingWeek(
  //         API_TOKEN
  //       );
  //       setSearch(trendingSearchData.results);
  //       console.log(trendingSearchData.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     getTrendingSearchData;
  //   }, [getTrendingSearchData]);

  const [trendingDay, setTrendingDay] = useState<TrendingResult[]>([]);

  const getTrendingDayData = useCallback(async () => {
    try {
      const trendingDayData = await trendingService.getTrendingDay(API_TOKEN);
      const trendingDayDataResults = trendingDayData.results;
      setTrendingDay(trendingDayDataResults);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTrendingDayData();
  }, [getTrendingDayData]);
  return (
    <div className={`${styles["search-bar"]}`}>
      <section className="flex w-[100%] justify-center items-center">
        <div>
          <div className="border-solid border-grey border-b-[1px] px-[40px] flex  items-center">
            <SearchBtn className="w-[20px] h-[20px] " />
            <form
              action="/search"
              method="get"
              acceptCharset="utf-8"
              className={`${styles["search-form"]}`}
            >
              <label>
                <input
                  type="text"
                  placeholder="Search for a movie, tv show, person..."
                  className="pr-[10px] py-[6px] pl-30px] w-[243px] h-[44px] outline-none"
                />
              </label>
            </form>
          </div>

          <div>
            <div className="flex border-solid border-grey border-b-[1px] px-[40px] bg-gray5 items-center">
              <Arrow className="w-[20px] h-[20px] mr-[3px]" />
              <h2 className="py-[10px] ">Trending</h2>
            </div>
            {trendingDay && trendingDay.length > 0 ? (
              <>
                {trendingDay.map((result: TrendingResult, id: number) => {
                  return (
                    <ul key={id}>
                      <li className="text-[18px]">
                        <div className="flex w-[100%] justify-center pt-[4px] pb-[5px] border-solid border-grey border-b-[1px]">
                          <div className="flex w-[100%] items-center text[16.2px] px-[40px]">
                            <div>
                              <SearchBtn className="w-[20px] h-[20px] mr-[6px]" />
                            </div>
                            <p>
                              <Link to={`/${id}`}>
                                <span
                                  title={result.title}
                                  className="text-black"
                                >
                                  {result.title}
                                </span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </>
            ) : (
              "no data"
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
