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
  scoresStyle: string;

  setNames: (value: boolean) => void;
  setScoresStyle: (value: string) => void;
}

export interface IStyleVars {
  fontFamily: string;
  baseFontSize: number;

  textColorPrimary: string;
  textColorSecondary: string;

  backgroundColorPrimary: string;
  backgroundColorSecondary: string;

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
}

export interface IThemeContext {
  backgroundColor: string;
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

  setBackgroundColor: (value: string) => void;
  setTextColor: (value: string) => void;

  setInputBackgroundColor: (value: string) => void;
  setInputTextColor: (value: string) => void;

  setNeutralBackgroundColor: (value: string) => void;
  setNeutralTextColor: (value: string) => void;

  setInnocentBackgroundColor: (value: string) => void;
  setInnocentTextColor: (value: string) => void;

  setImpostorBackgroundColor: (value: string) => void;
  setImpostorTextColor: (value: string) => void;

  setButtonBackgroundColor: (value: string) => void;
  setButtonTextColor: (value: string) => void;

  setButtonDangerBackgroundColor: (value: string) => void;
  setButtonDangerTextColor: (value: string) => void;

  setBorderColor: (value: string) => void;

  setLinkColor: (value: string) => void;

  resetColors: () => void;
}

export interface IColor {
  name: string;
  hex: string;
  change: (value: string) => void;
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
