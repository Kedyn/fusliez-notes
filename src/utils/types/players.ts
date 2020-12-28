import { ICoordinates } from "./shared";

export type IPlayerColor =
  | "black"
  | "blue"
  | "brown"
  | "cyan"
  | "green"
  | "lime"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "white"
  | "yellow";

export interface IPlayer {
  name: string;
  color: IPlayerColor;
  position: ICoordinates;
  section: number;
}

export interface IPlayersState {
  black: IPlayer;
  blue: IPlayer;
  brown: IPlayer;
  cyan: IPlayer;
  green: IPlayer;
  lime: IPlayer;
  orange: IPlayer;
  pink: IPlayer;
  purple: IPlayer;
  red: IPlayer;
  white: IPlayer;
  yellow: IPlayer;
}

export interface ISetPlayerNamePayload {
  player: IPlayerColor;
  newName: string;
}

export interface ISetPlayerPositionPayload {
  player: IPlayerColor;
  newPosition: ICoordinates;
}

export interface ISetPlayerSectionPayload {
  player: IPlayerColor;
  newSection: number;
}

export interface IPlayerImage {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IPlayersImages {
  black: IPlayerImage;
  blue: IPlayerImage;
  brown: IPlayerImage;
  cyan: IPlayerImage;
  green: IPlayerImage;
  lime: IPlayerImage;
  orange: IPlayerImage;
  pink: IPlayerImage;
  purple: IPlayerImage;
  red: IPlayerImage;
  white: IPlayerImage;
  yellow: IPlayerImage;
  blackDead: IPlayerImage;
  blueDead: IPlayerImage;
  brownDead: IPlayerImage;
  cyanDead: IPlayerImage;
  greenDead: IPlayerImage;
  limeDead: IPlayerImage;
  orangeDead: IPlayerImage;
  pinkDead: IPlayerImage;
  purpleDead: IPlayerImage;
  redDead: IPlayerImage;
  whiteDead: IPlayerImage;
  yellowDead: IPlayerImage;
}
