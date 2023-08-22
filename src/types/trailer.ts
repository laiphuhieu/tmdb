import { IEntity } from "./common";

export interface Trailer extends IEntity {
  page: number;
  results: TrailerResult[];
  total_pages: number;
  total_results: number;
  videos: {
    results: [
      {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: undefined;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }
    ];
  };
}

export interface TrailerResult extends IEntity {
  original_title: string;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
  key: string;
}
