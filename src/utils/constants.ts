import { IPlayers, ISettings, ITheme } from "./types";
import { STYLE_VARS } from "./styleVars";

export const VERSION = "0.9.1";

export const NAMESPACE = "fusliez-notes-";

export const DEFAULT_SETTINGS: ISettings = {
  names: true,
  scoresStyle: "circles",
};

export const DEFAULT_THEME_DATA: ITheme = {
  backgroundColor: STYLE_VARS.backgroundColorPrimary,
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

  linkColor: "#ee54bb",
};

export const DEFAULT_PLAYERS: IPlayers = {
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
    { id: "orange", name: "", color: "orange" },
    { id: "blue", name: "", color: "blue" },
    { id: "brown", name: "", color: "brown" },
    { id: "gray", name: "", color: "gray" },
    { id: "green", name: "", color: "green" },
    { id: "lightGreen", name: "", color: "lightGreen" },
    { id: "pink", name: "", color: "pink" },
    { id: "purple", name: "", color: "purple" },
    { id: "red", name: "", color: "red" },
    { id: "teal", name: "", color: "teal" },
    { id: "white", name: "", color: "white" },
    { id: "yellow", name: "", color: "yellow" },
  ],
};
