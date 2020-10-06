import { IStyleVars, IColorLibrary } from "./types";

export const STYLE_VARS: IStyleVars = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  baseFontSize: 16,

  textColorPrimary: "#eee",
  textColorSecondary: "#fff",

  backgroundColorPrimary: "#202225",
  backgroundColorSecondary: "#282b2f",

  linkColor: "#9EC4D5",
  linkColorHover: "#C2D2E3",

  activeColor: "#506167",

  borderColor: "#36383a",
};

export const COLOR_LIBRARY: IColorLibrary = {
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
  cyan: {
    base: "#39FEDB",
    dark: "#24A9BE",
  },
  green: {
    base: "#127F2D",
    dark: "#0A4D2D",
  },
  lime: {
    base: "#50EF3A",
    dark: "#16A843",
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
  white: {
    base: "#D5E0EF",
    dark: "#8396BF",
  },
  yellow: {
    base: "#F5F558",
    dark: "#C38821",
  },
};
