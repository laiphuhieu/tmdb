import { IEntity } from "./common";

export interface Trending extends IEntity {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendingResult extends IEntity {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}
