import DarkTheme from "./dark";
import DefaultTheme from "./default";
import { ITheme } from "utils/types";
import LightTheme from "./light";

type ProjectTheme = {
  [name: string]: ITheme;
};

export const Themes: ProjectTheme = {
  default: new DefaultTheme(),
  light: new LightTheme(),
  dark: new DarkTheme(),
};
