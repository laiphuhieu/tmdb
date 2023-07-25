import axiosInstance from "./apiService";
import { Popular } from "@/types/popular";

const popularService = {
  getPopularOnTv(token: string): Promise<Popular> {
    return axiosInstance(token).get(
      "https://api.themoviedb.org/3/tv/popular?language=vi"
    );
  },

  getPopularInTheaters(token: string): Promise<Popular> {
    return axiosInstance(token).get(
      "https://api.themoviedb.org/3/tv/popular?language=vi&page=2"
    );
  },
};

export default popularService;
