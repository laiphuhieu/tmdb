import axiosInstance from "./apiService";
import { Trailer } from "@/types/trailer";
import { API_KEY } from "@/config/app.config";

const trailerService = {
  getTrailer(token: string): Promise<Trailer> {
    return axiosInstance(token).get("/discover/movie");
  },
  getTrailerById(token: string, id: number): Promise<Trailer> {
    return axiosInstance(token).get(
      `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
  },
};

export default trailerService;
