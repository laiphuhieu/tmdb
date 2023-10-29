import axiosInstance from "./apiService";
import { CastPeopleResult } from "@/types/people";
import { CombinedCredits } from "@/types/people";

const peopleService = {
  getPeopleCredits(
    token: string,
    id: string | undefined
  ): Promise<CastPeopleResult | undefined> {
    return axiosInstance(token).get(`/person/${id}`);
  },

  getCombinedCredits(
    token: string,
    id: string | undefined
  ): Promise<CombinedCredits | undefined> {
    return axiosInstance(token).get(
      `/person/${id}/combined_credits?language=vi-VI`
    );
  },
};

export default peopleService;
