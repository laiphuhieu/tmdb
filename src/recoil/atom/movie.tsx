import { atom } from "recoil";

import { SearchResults } from "@/types/search";

export const movieState = atom<SearchResults[]>({
  key: "movieState",
  default: [],
});
