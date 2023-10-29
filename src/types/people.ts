import { IEntity } from "./common";

export interface People extends IEntity {
  cast: CastPeopleResult[];
}

export interface CastPeopleResult extends IEntity {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: number;
  deathday: null;
  gender: number;
  homepage: null;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface CombinedCredits extends IEntity {
  cast: CastCredit[];
  crew: CrewCredit[];
}

export interface CastCredit extends IEntity {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  character: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
  name: string;
  media_type: string;
  first_air_date: string;
  episode_count: number;
}

export interface CrewCredit extends IEntity {
  adult: false;
  backdrop_path: string;
  credit_id: string;
  character: string;
  department: string;
  genre_ids: [];
  job: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
}
