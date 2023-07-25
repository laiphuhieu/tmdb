import { AxiosPromise } from "axios";

import { Trending } from "@/types/trending";
import axiosInstance from "./apiService";

const trendingService = {
  getTrendingDay(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/day?language=vi");
  },

  getTrendingWeek(token: string): AxiosPromise {
    return axiosInstance(token).get<Trending>(
      "/trending/movie/week?language=vi"
    );
  },
};

export default trendingService;
