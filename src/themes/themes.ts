import DarkTheme from "./dark";
import { ITheme } from "utils/types";
import LightTheme from "./light";

type ProjectTheme = {
  [name: string]: ITheme;
};

export const Themes: ProjectTheme = {
  light: new LightTheme(),
  dark: new DarkTheme(),
};
