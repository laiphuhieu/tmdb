import axiosInstance from "./apiService";
import { Search } from "@/types/search";
import { API_KEY } from "@/config/app.config";

const searchService = {
  getSearchAll(token: string): Promise<Search> {
    return axiosInstance(token).get(
      `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
    );
  },

  getSearchedMovies(
    token: string,
    search: string | undefined
  ): Promise<Search> {
    return axiosInstance(token).get(
      `/search/movie?query=${search}&page=1&api_key=${API_KEY}`
    );
  },
};

export default searchService;
