import { IEntity } from "./common";

export interface Recommendation extends IEntity {
  page: number;
  results: RecommendationResult[];
  total_pages: number;
  total_results: number;
}

export interface RecommendationResult extends IEntity {
  adult: boolean;
  backdrop_path: string;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [];
  popularity: number;
  release_date: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
