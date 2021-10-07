import { IColorLibrary, ITheme } from "utils/types/theme";

export const DEFAULT_THEME_DATA: ITheme = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  baseFontSize: 16,

  textColorPrimary: "#eeeeee",
  textColorSecondary: "#ffffff",

  backgroundColorPrimary: "#202225",
  backgroundColorSecondary: "#282b2f",

  linkColor: "#9EC4D5",
  linkColorHover: "#C2D2E3",

  dangerColor: "#8B0000",
  dangerColorHover: "#be0000",

  activeColor: "#667c84",

  borderColor: "#36383a",

  crewmateColorPrimary: "#008dfc",
  crewmateColorSecondary: "#30a4ff",

  impostorColorPrimary: "#af1211",
  impostorColorSecondary: "#dd1716",

  neutralColor: "#8d86b7",
};

export const COLOR_LIBRARY: IColorLibrary = {
  banana: {
    base: "#FFFFBE",
    dark: "#D2BC89",
  },
  black: {
    base: "#3F484E",
    dark: "#1E1F25",
  },
  blue: {
    base: "#132FD2",
    dark: "#09158E",
  },
  brown: {
    base: "#72491E",
    dark: "#5E2614",
  },
  coral: {
    base: "#EC7578",
    dark: "#B44362",
  },
  cyan: {
    base: "#39FEDB",
    dark: "#24A9BE",
  },
  gray: {
    base: "#8397A7",
    dark: "#465664",
  },
  green: {
    base: "#127F2D",
    dark: "#0A4D2D",
  },
  lime: {
    base: "#50EF3A",
    dark: "#16A843",
  },
  maroon: {
    base: "#6C2B3D",
    dark: "#410F1A",
  },
  orange: {
    base: "#EF7D0E",
    dark: "#B53F15",
  },
  pink: {
    base: "#ED53B9",
    dark: "#AC2CAD",
  },
  purple: {
    base: "#6B30BC",
    dark: "#3C177C",
  },
  red: {
    base: "#C51111",
    dark: "#7B0838",
  },
  rose: {
    base: "#FFD6EC",
    dark: "#DE92B3",
  },
  tan: {
    base: "#9F9989",
    dark: "#51413E",
  },
  white: {
    base: "#D5E0EF",
    dark: "#8396BF",
  },
  yellow: {
    base: "#F5F558",
    dark: "#C38821",
  },
};
