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
  textColorAlt: STYLE_VARS.textColorSecondary,

  inputBackgroundColor: STYLE_VARS.backgroundColorSecondary,
  inputTextColor: STYLE_VARS.textColorPrimary,

  neutralColor: STYLE_VARS.neutralColor,

  crewmateColor: STYLE_VARS.crewmateColor,
  crewmateColorHover: STYLE_VARS.crewmateColorAlt,

  imposterColor: STYLE_VARS.imposterColor,
  imposterColorHover: STYLE_VARS.imposterColorAlt,

  borderColor: STYLE_VARS.borderColor,

  linkColor: STYLE_VARS.linkColor,
  linkColorHover: STYLE_VARS.linkColorHover,

  dangerColor: STYLE_VARS.dangerColor,
  dangerColorHover: STYLE_VARS.dangerColorHover,

  activeColor: STYLE_VARS.activeColor,
};

export const DEFAULT_PLAYERS: IPlayers = {
  innocentPlayers: [],
  susPlayers: [],
  evilPlayers: [],
  deadPlayers: [],
  unknownPlayers: [
    { id: "Brown", playerName: "", color: "brown" },
    { id: "Red", playerName: "", color: "red" },
    { id: "Orange", playerName: "", color: "orange" },
    { id: "Yellow", playerName: "", color: "yellow" },
    { id: "Lime", playerName: "", color: "lime" },
    { id: "Green", playerName: "", color: "green" },
    { id: "Cyan", playerName: "", color: "cyan" },
    { id: "Blue", playerName: "", color: "blue" },
    { id: "Purple", playerName: "", color: "purple" },
    { id: "Pink", playerName: "", color: "pink" },
    { id: "White", playerName: "", color: "white" },
    { id: "Black", playerName: "", color: "black" },
  ],
};
