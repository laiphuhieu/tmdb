import React, { useCallback, ChangeEvent, useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import { DebounceInput } from "react-debounce-input";

import { API_TOKEN } from "@/config/app.config";
import { ReactComponent as SearchBtn } from "@/assets/images/search.svg";
import { ReactComponent as Arrow } from "@/assets/images/arrow-up.svg";
import { ReactComponent as CloseBtn } from "@/assets/images/closeBtn.svg";
import { ReactComponent as Loading } from "@/assets/images/loading.svg";
import searchService from "@/services/searchService";
import SearchResult from "./SearchResult";
import { searchState } from "@/recoil/atom/search";
import { movieState } from "@/recoil/atom/movie";
import useAutoFocus from "@/custom-hooks/useAutoFocus";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Search = ({ moviesFetch }: any) => {
  const [movies, setMovies] = useRecoilState(movieState);
  const [search, setSearch] = useRecoilState(searchState);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useAutoFocus();

  const getSearchedMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const getSearchedMoviesData = await searchService.getSearchedMovies(
        API_TOKEN,
        search
      );

      setMovies(getSearchedMoviesData.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [search, setMovies]);

  const getTrendingMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const moviesData = await searchService.getSearchAll(API_TOKEN);
      setMovies(moviesData.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [setMovies]);

  const handleClear = useCallback(() => {
    setMovies([]);
    setSearch("");
    inputRef.current?.focus();
    // getTrendingMovies();
    const Data = setTimeout(() => {
      getTrendingMovies();
      return () => {
        clearTimeout(Data);
      };
    }, 500);
  }, [setMovies, setSearch, inputRef, getTrendingMovies]);

  const changeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearch(searchValue.trim());

      if (searchValue.length) {
        getSearchedMovies();
      } else {
        getTrendingMovies();
      }
    },
    [setSearch, getSearchedMovies, getTrendingMovies]
  );

  useEffect(() => {
    if (search) {
      getSearchedMovies();
    }
  }, [getSearchedMovies, setMovies, getTrendingMovies, search]);

  return (
    <div>
      <section className="flex w-[100vw] justify-center items-center">
        <div className="w-[100vw]">
          <div className="flex border-solid border-grey border-b-[1px] px-[40px] bg-gray5 items-center">
            <Arrow className="w-[20px] h-[20px] mr-[3px]" />
            <h2 className="py-[10px] ">Trending</h2>
          </div>
          <div className="border-solid border-grey border-b-[1px] px-[40px] flex items-center justify-between">
            <div className="flex items-center w-full">
              <SearchBtn className="w-[20px] h-[20px]" />
              <DebounceInput
                debounceTimeout={500}
                placeholder="Search for a movie, tv show, person..."
                className="pr-[10px] py-[6px] pl-[6px] h-[44px] outline-none w-full"
                onChange={changeSearch}
                value={search}
                inputRef={inputRef}
              />
            </div>
            {!!search && !isLoading && (
              <div
                onClick={handleClear}
                className="absolute right-[30px] text-gray bg-transparent	text-[16px]"
              >
                <CloseBtn className="w-[16px] h-[16px] cursor-pointer" />
              </div>
            )}
            {isLoading && (
              <div className="absolute right-[30px] text-gray bg-transparent text-[16px]">
                <Loading className="w-[16px] h-[16px] cursor-pointer" />
              </div>
            )}
          </div>
          {movies.length ? (
            <SearchResult movies={moviesFetch} />
          ) : (
            <div className="text-3xl text-center py-[24px] text-gray2">
              {" "}
              <SearchResult />
              No result...
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
