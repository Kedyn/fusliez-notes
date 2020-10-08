import { IPlayers, ISettings, ITheme } from "./types";

export const VERSION = "0.9.1";

export const NAMESPACE = "fusliez-notes-";

export const DEFAULT_SETTINGS: ISettings = {
  names: true,
  scoresStyle: "circles",
};

export const DEFAULT_THEME_DATA: ITheme = {
  backgroundColor: "#202225",
  textColor: "#ffffff",

  inputBackgroundColor: "#f6edf6",
  inputTextColor: "#202225",

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

  borderColor: "#36383a",

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
