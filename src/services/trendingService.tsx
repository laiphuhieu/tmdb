import axiosInstance from "./apiService";
import { Trending } from "@/types/trending";

const trendingService = {
  getTrendingDay(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/day?language=vi");
  },

  getTrendingWeek(token: string): Promise<Trending> {
    return axiosInstance(token).get("/trending/movie/week?language=vi");
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTrendingDayById(token: string, id: any) {
    return axiosInstance(token).get(
      `/trending/movie/day/${id}?language=vi&append_to_response=videos`
    );
  },
};

export default trendingService;
