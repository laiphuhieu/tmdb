import { IEntity } from "./common";

export interface Search extends IEntity {
  page: number;
  results: SearchResults[];
}

export interface SearchResults extends IEntity {
  adult: false;
  backdrop_path: string;
  genre_ids: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
