import { IRect } from "./shared";

export type IPlayerColor =
  | "banana"
  | "black"
  | "blue"
  | "brown"
  | "coral"
  | "cyan"
  | "gray"
  | "green"
  | "lime"
  | "maroon"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "tan"
  | "white"
  | "yellow";

export interface IPlayer {
  name: string;
  color: IPlayerColor;
  section: number;
  usedEmergencyButton: boolean;
}

export interface IPlayersState {
  banana: IPlayer;
  black: IPlayer;
  blue: IPlayer;
  brown: IPlayer;
  coral: IPlayer;
  cyan: IPlayer;
  gray: IPlayer;
  green: IPlayer;
  lime: IPlayer;
  maroon: IPlayer;
  orange: IPlayer;
  pink: IPlayer;
  purple: IPlayer;
  red: IPlayer;
  rose: IPlayer;
  tan: IPlayer;
  white: IPlayer;
  yellow: IPlayer;
}

export interface ISetPlayerNamePayload {
  player: IPlayerColor;
  newName: string;
}

export interface ISetPlayerSectionPayload {
  player: IPlayerColor;
  newSection: number;
}

export interface ISetPlayerUsedEmergencyButton {
  player: IPlayerColor;
  usedEmergencyButton: boolean;
}

export interface IPlayerImage {
  alive: IRect;
  dead: IRect;
}

export interface IPlayersImages {
  banana: IPlayerImage;
  black: IPlayerImage;
  blue: IPlayerImage;
  brown: IPlayerImage;
  coral: IPlayerImage;
  cyan: IPlayerImage;
  gray: IPlayerImage;
  green: IPlayerImage;
  lime: IPlayerImage;
  maroon: IPlayerImage;
  orange: IPlayerImage;
  pink: IPlayerImage;
  purple: IPlayerImage;
  red: IPlayerImage;
  rose: IPlayerImage;
  tan: IPlayerImage;
  white: IPlayerImage;
  yellow: IPlayerImage;
}
