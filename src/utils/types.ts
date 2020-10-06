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

  activeColor: string;

  borderColor: string;
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

  inputBackgroundColor: string;
  inputTextColor: string;

  neutralBackgroundColor: string;
  neutralTextColor: string;

  innocentBackgroundColor: string;
  innocentTextColor: string;

  impostorBackgroundColor: string;
  impostorTextColor: string;

  buttonBackgroundColor: string;
  buttonTextColor: string;

  buttonDangerBackgroundColor: string;
  buttonDangerTextColor: string;

  borderColor: string;

  linkColor: string;
  linkColorHover: string;

  activeColor: string;
}

export interface IMobileContext {
  isMobile: boolean;
  orientation: string;
}

export interface IView {
  title: string;
  content: React.ReactNode;
}

export interface IScoresContext {
  innocentWins: number;
  innocentLosses: number;
  impostorWins: number;
  impostorLosses: number;

  setInnocentWins: (value: number) => void;
  setInnocentLosses: (value: number) => void;
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
