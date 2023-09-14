import axiosInstance from "./apiService";
import { Trending, TrendingResult } from "@/types/trending";

const trendingService = {
  getTrendingDay(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/day?language=vi");
  },

  getTrendingWeek(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/week?language=vi");
  },

  getMoviesDetailById(
    token: string,
    id: string | undefined
  ): Promise<TrendingResult | undefined> {
    return axiosInstance(token).get(
      `/movie/${id}?append_to_response=videos&language=vi-VI`
    );
  },
};

export default trendingService;
