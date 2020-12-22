import { ICoordinates } from "./shared";

export type IPlayerColor =
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "purple"
  | "pink"
  | "white"
  | "black";

export interface IPlayer {
  name: string;
  color: IPlayerColor;
  position: ICoordinates;
  isDead: boolean;
  isUsed: boolean;
}

export interface IPlayersState {
  brown: IPlayer;
  red: IPlayer;
  orange: IPlayer;
  yellow: IPlayer;
  lime: IPlayer;
  green: IPlayer;
  cyan: IPlayer;
  blue: IPlayer;
  purple: IPlayer;
  pink: IPlayer;
  white: IPlayer;
  black: IPlayer;
}

export interface ISetPlayerNamePayload {
  player: IPlayerColor;
  newName: string;
}

export interface ISetPlayerPositionPayload {
  player: IPlayerColor;
  newPosition: ICoordinates;
}

export interface ISetPlayerIsDeadPayload {
  player: IPlayerColor;
  newIsDead: boolean;
}

export interface ISetPlayerIsUsedPayload {
  player: IPlayerColor;
  newIsUsed: boolean;
}