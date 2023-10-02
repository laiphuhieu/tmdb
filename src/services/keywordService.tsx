import axiosInstance from "./apiService";
import { Keyword } from "@/types/keywords";

const keywordService = {
  getKeywords(token: string, id: string): Promise<Keyword | undefined> {
    return axiosInstance(token).get(`/movie/${id}/keywords`);
  },
};

export default keywordService;
