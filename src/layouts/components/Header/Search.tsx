import React, { useState, useEffect, useCallback, ChangeEvent } from "react";

import { API_TOKEN } from "@/config/app.config";
import { ReactComponent as SearchBtn } from "@/assets/images/search.svg";
import { ReactComponent as Arrow } from "@/assets/images/arrow-up.svg";
import searchService from "@/services/searchService";
import { SearchResults } from "@/types/search";
import SearchResult from "./SearchResult";
import { useDebounce } from "@uidotdev/usehooks";

const Search = () => {
  const [movies, setMovies] = useState<SearchResults[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [search, setSearch] = useState<any>("");

  const debouncedSearchTerm = useDebounce(search, 500);

  const getAllMovies = useCallback(async () => {
    try {
      const getAllMoviesData = await searchService.getSearchAll(API_TOKEN);
      setMovies(getAllMoviesData.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const getSearchedMovies = useCallback(async () => {
  //   try {
  //     const getSearchedMoviesData = await searchService.getSearchedMovies(
  //       API_TOKEN,
  //       debouncedSearchTerm,
  //     );

  //     setMovies(getSearchedMoviesData.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [debouncedSearchTerm]);

  const getSearchedMovies = useCallback(async () => {
    if (debouncedSearchTerm) {
      const getSearchedMoviesData = await searchService.getSearchedMovies(
        API_TOKEN,
        debouncedSearchTerm
      );
      setMovies(getSearchedMoviesData.results);
    }

    getSearchedMovies;
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setMovies([]);
    getSearchedMovies()

    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [getAllMovies, getSearchedMovies, search]);

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearch(searchValue);
    }
  };

  return (
    <div>
      <section className="flex w-[100%] justify-center items-center">
        <div>
          <div className="flex border-solid border-grey border-b-[1px] px-[40px] bg-gray5 items-center">
            <Arrow className="w-[20px] h-[20px] mr-[3px]" />
            <h2 className="py-[10px] ">Trending</h2>
          </div>
          <div className="border-solid border-grey border-b-[1px] px-[40px] flex items-center">
            <SearchBtn className="w-[20px] h-[20px]" />
            <input
              type="search"
              value={search}
              onChange={changeSearch}
              placeholder="Search for a movie, tv show, person..."
              className="pr-[10px] py-[6px] pl-[20px] h-[44px] outline-none w-[280px]"
            />
          </div>
          {movies?.length === 0 ? (
            <div className="text-3xl text-center "> Loading...</div>
          ) : (
            <SearchResult movies={movies} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
