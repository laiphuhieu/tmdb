import { IEntity } from "./common";

export interface Popular extends IEntity {
  page: number;
  results: PopularResult[];
  total_pages: number;
  total_results: number;
}

export interface PopularResult extends IEntity {
  name: string;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
}
