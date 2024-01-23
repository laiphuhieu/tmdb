import axiosInstance from "./apiService";
import { Recommendation } from "@/types/recommendations";

const recommendationsService = {
  getRecommendation(
    token: string,
    id: string | undefined
  ): Promise<Recommendation | undefined> {
    return axiosInstance(token).get(`/movie/${id}/recommendations?language=vi`);
  },
};

export default recommendationsService;
