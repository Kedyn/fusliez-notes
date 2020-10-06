import { ItemInterface } from "react-sortablejs";

export interface IPlayer extends ItemInterface {
  name: string;
  color: string;
}

export interface ISettings {
  names: boolean;
  scoresStyle: string;
}

export interface ISettingsContext {
  names: boolean;

  setNames: (value: boolean) => void;
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

  colorBlack: string;
  colorBlackDark: string;
  colorBlue: string;
  colorBlueDark: string;
  colorBrown: string;
  colorBrownDark: string;
  colorCyan: string;
  colorCyanDark: string;
  colorGreen: string;
  colorGreenDark: string;
  colorLime: string;
  colorLimeDark: string;
  colorOrange: string;
  colorOrangeDark: string;
  colorPink: string;
  colorPinkDark: string;
  colorPurple: string;
  colorPurpleDark: string;
  colorRed: string;
  colorRedDark: string;
  colorWhite: string;
  colorWhiteDark: string;
  colorYellow: string;
  colorYellowDark: string;
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
