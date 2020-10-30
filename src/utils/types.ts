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

export interface IStyleVars {
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

  crewmateColor: string;
  crewmateColorAlt: string;

  imposterColor: string;
  imposterColorAlt: string;

  neutralColor: string;
}

export interface IColorLibrary {
  [key: string]: IColorEntry;
}

export interface IColorEntry {
  base: string;
  dark: string;
}

export interface ITheme {
  backgroundColor: string;
  backgroundColorAlt: string;
  textColor: string;
  textColorAlt: string;

  inputBackgroundColor: string;
  inputTextColor: string;

  neutralColor: string;

  crewmateColor: string;
  crewmateColorHover: string;

  imposterColor: string;
  imposterColorHover: string;

  borderColor: string;

  linkColor: string;
  linkColorHover: string;

  dangerColor: string;
  dangerColorHover: string;

  activeColor: string;
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
  PlayersLists: IPlayersListsSlice;
}

export interface IPlayersList extends ItemInterface {
  title: string;
  players: Array<IPlayer>;
}

export interface IPlayersListsSlice {
  playersContainer: number;
  lists: Array<IPlayersList>;
}
