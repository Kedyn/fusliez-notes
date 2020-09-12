import { ItemInterface } from "react-sortablejs";
import { JssStyle } from "jss";

export interface IPlayer extends ItemInterface {
  name: string;
  color: string;
}

export interface ITheme {
  background_primary: string;
  background_secondary: string;
  background_tertiary: string;
  background_success: string;
  background_danger: string;
  text_primary: string;
  text_secondary: string;
  font_family: string;
  font_size: number;

  global: JssStyle;
}
