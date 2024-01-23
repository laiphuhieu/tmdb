import axiosInstance from "./apiService";
import { Trending } from "@/types/trending";

const trendingService = {
  getTrendingDay(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/day?language=vi");
  },

  getTrendingWeek(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/week?language=vi");
  },
};

export default trendingService;
