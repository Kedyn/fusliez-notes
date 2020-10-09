import { ItemInterface } from "react-sortablejs";

export interface IPlayer extends ItemInterface {
  playerName: string;
  color: string;
}

export interface ISettings {
  showNames: boolean;
  scoresStyle: string;
}

export interface ISettingsContext {
  showNames: boolean;

  setShowNames: (value: boolean) => void;
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

export interface IPlayers {
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;
}

export interface IPlayersContext {
  innocentPlayers: Array<IPlayer>;
  susPlayers: Array<IPlayer>;
  evilPlayers: Array<IPlayer>;
  deadPlayers: Array<IPlayer>;
  unknownPlayers: Array<IPlayer>;

  setInnocentPlayers: (value: Array<IPlayer>) => void;
  setSusPlayers: (value: Array<IPlayer>) => void;
  setEvilPlayers: (value: Array<IPlayer>) => void;
  setDeadPlayers: (value: Array<IPlayer>) => void;
  setUnknownPlayers: (value: Array<IPlayer>) => void;

  resetPlayersPositions: () => void;
}
