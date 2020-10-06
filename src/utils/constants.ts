import { IPlayers, ISettings, ITheme } from "./types";
import { STYLE_VARS } from "./styleVars";

export const VERSION = "0.9.1";

export const NAMESPACE = "fusliez-notes-";

export const DEFAULT_SETTINGS: ISettings = {
  showNames: true,
  scoresStyle: "circles",
};

export const DEFAULT_THEME_DATA: ITheme = {
  backgroundColor: STYLE_VARS.backgroundColorPrimary,
  backgroundColorAlt: STYLE_VARS.backgroundColorSecondary,
  textColor: STYLE_VARS.textColorPrimary,

  inputBackgroundColor: STYLE_VARS.backgroundColorSecondary,
  inputTextColor: STYLE_VARS.textColorPrimary,

  neutralBackgroundColor: "#f0c5e2",
  neutralTextColor: "#ee54bb",

  innocentBackgroundColor: "#ccbed3",
  innocentTextColor: "#905da9",

  impostorBackgroundColor: "#c9cfe7",
  impostorTextColor: "#7289da",

  buttonBackgroundColor: "#6b2fbc",
  buttonTextColor: "#ffffff",

  buttonDangerBackgroundColor: "#8B0000",
  buttonDangerTextColor: "#ffffff",

  borderColor: STYLE_VARS.borderColor,

  linkColor: STYLE_VARS.linkColor,
  linkColorHover: STYLE_VARS.linkColorHover,

  activeColor: STYLE_VARS.activeColor,
};

export const DEFAULT_PLAYERS: IPlayers = {
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
    { id: "Blue", playerName: "", color: "blue" },
    { id: "Black", playerName: "", color: "black" },
    { id: "Brown", playerName: "", color: "brown" },
    { id: "Cyan", playerName: "", color: "cyan" },
    { id: "Green", playerName: "", color: "green" },
    { id: "Lime", playerName: "", color: "lime" },
    { id: "Orange", playerName: "", color: "orange" },
    { id: "Pink", playerName: "", color: "pink" },
    { id: "Purple", playerName: "", color: "purple" },
    { id: "Red", playerName: "", color: "red" },
    { id: "White", playerName: "", color: "white" },
    { id: "Yellow", playerName: "", color: "yellow" },
  ],
};
