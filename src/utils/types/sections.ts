import { ItemInterface } from "react-sortablejs";

export interface ISection extends ItemInterface {
  title: string;
  players: Array<ItemInterface>;
}

export interface ISectionsState {
  resetSection: number;
  deadSection: number;
  unusedSection: number;
  sections: Array<ISection>;
}

export interface ISpecialSections {
  resetSection: number;
  deadSection: number;
  unusedSection: number;
}

export interface ISetSectionTitlePayload {
  section: number;
  newTitle: string;
}

export interface ISetSectionPlayersPayload {
  section: number;
  newPlayers: Array<ItemInterface>;
}
