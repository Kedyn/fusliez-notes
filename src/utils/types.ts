import { ItemInterface } from "react-sortablejs";

export interface ISettingsState {
  showNames: boolean;
  isColorBlind: boolean;
}

export interface IDeviceState {
  isMobile: boolean;
  orientation: "portrait" | "landscape";
}

export interface IScoresState {
  crewmateWins: number;
  crewmateLosses: number;
  impostorWins: number;
  impostorLosses: number;
}

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

export interface ICoordinates {
  x: number;
  y: number;
}

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

export interface ISection extends ItemInterface {
  title: string;
  players: Array<ItemInterface>;
}

export interface ISectionsState {
  resetSection: number;
  sections: Array<ISection>;
}

export interface IMapsState {
  currentMap: string;
  cameraPosition: ICoordinates;
  scale: number;
}

export interface IUIStoreState {
  SettingsState: ISettingsState;
  DeviceState: IDeviceState;
  ScoresState: IScoresState;
  PlayersState: IPlayersState;
  PlayerEditLockState: boolean;
  SectionsState: ISectionsState;
  MapsState: IMapsState;
}

export interface IColorLibrary {
  [key: string]: IColorEntry;
}

export interface IColorEntry {
  base: string;
  dark: string;
}

export interface ITheme {
  fontFamily: string;
  baseFontSize: number;

  textColorPrimary: string;
  textColorSecondary: string;

  backgroundColorPrimary: string;
  backgroundColorSecondary: string;

  linkColor: string;
  linkColorHover: string;

  dangerColor: string;
  dangerColorHover: string;

  activeColor: string;

  borderColor: string;

  crewmateColorPrimary: string;
  crewmateColorSecondary: string;

  imposterColorPrimary: string;
  imposterColorSecondary: string;

  neutralColor: string;
}

export interface IView {
  title: string;
  content: React.ReactNode;
  minor: boolean;
}

export interface ILanguage {
  id: string;
  label: string;
}

export interface IPerson {
  name: string;
  link: string;
}
