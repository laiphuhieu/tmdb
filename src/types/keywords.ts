import { IEntity } from "./common";

export interface Keyword extends IEntity {
  keywords: KeywordResult[];
}

export interface KeywordResult extends IEntity {
  name: string;
}
