import { IEntity } from "./common";

export interface WatchlistProps extends IEntity {
  title: string;
  id: number;
}

export interface WatchlistState {
  movies: WatchlistProps[];
}
