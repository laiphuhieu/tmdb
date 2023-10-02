import axiosInstance from "./apiService";
import { TrendingResult } from "@/types/trending";
import { Credit } from "@/types/cast";
import { API_KEY } from "@/config/app.config";

const movieDetailService = {
  getMoviesDetailById(
    token: string,
    id: string | undefined
  ): Promise<TrendingResult | undefined> {
    return axiosInstance(token).get(
      `/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=vi-VI`
    );
  },

  getCreditsById(token: string, id: string): Promise<Credit | undefined> {
    return axiosInstance(token).get(`/movie/${id}/credits`);
  },
};

export default movieDetailService;
