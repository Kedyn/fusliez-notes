import { ItemInterface } from "react-sortablejs";

export interface IPlayer extends ItemInterface {
  playerName: string;
  color: string;
}

export interface ISettings {
  showNames: boolean;
  isColorBlind: boolean;
}

export interface ISettingsContext {
  showNames: boolean;
  isColorBlind: boolean;

  setShowNames: (value: boolean) => void;
  setIsColorBlind: (value: boolean) => void;
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

export interface IMobileContext {
  isMobile: boolean;
  orientation: string;
}

export interface IView {
  title: string;
  content: React.ReactNode;
  minor: boolean;
}

export interface ILanguage {
  label: string;
  id: string;
}

export interface IScoresContext {
  crewmateWins: number;
  crewmateLosses: number;
  impostorWins: number;
  impostorLosses: number;

  setCrewmateWins: (value: number) => void;
  setCrewmateLosses: (value: number) => void;
  setImpostorWins: (value: number) => void;
  setImpostorLosses: (value: number) => void;

  resetScores: () => void;
}

export interface ILockingContextProvider {
  isLocked: boolean;

  resetLock: () => void;
  toggleLock: () => void;
}

export interface IDevice {
  isMobile: boolean;
  orientation: "portrait" | "landscape";
}

export interface IScores {
  crewmateWins: number;
  crewmateLosses: number;
  impostorWins: number;
  impostorLosses: number;
}

export interface IUIStoreState {
  Settings: ISettings;
  Device: IDevice;
  Scores: IScores;
  PlayerEditLock: boolean;
  PlayersSections: IPlayersSectionsSlice;
  Maps: IMaps;
}

export interface IPlayersSection extends ItemInterface {
  title: string;
  players: Array<IPlayer>;
}

export interface IPlayersSectionsSlice {
  defaultSection: number;
  sections: Array<IPlayersSection>;
}

export interface IPerson {
  name: string;
  link: string;
}

export interface IMapsCharacter {
  id: string;
  x: number;
  y: number;
}

export interface IMaps {
  currentMap: string;
  characters: Array<IMapsCharacter>;
}
