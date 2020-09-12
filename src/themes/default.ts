import { ITheme } from "utils/types";
import { JssStyle } from "jss";

export default class DefaultTheme implements ITheme {
  public background_primary: string;
  public background_secondary: string;
  public background_tertiary: string;
  public background_success: string;
  public background_danger: string;
  public text_primary: string;
  public text_secondary: string;
  public font_family: string;
  public font_size: number;

  public global: JssStyle;

  public constructor() {
    this.background_primary = "#ffffff";
    this.background_secondary = "#6c757d";
    this.background_tertiary = "#343a40";
    this.background_success = "#28a745";
    this.background_danger = "rgba(220, 53, 69, 0.5)";
    this.text_primary = "#000000";
    this.text_secondary = "#343a40";
    this.font_family = "Titillium Web, sans-serif";
    this.font_size = 20;

    this.global = {
      html: {
        boxSizing: "border-box",
      },
      "*, *:before, *:after": {
        boxSizing: "inherit",
      },
      body: {
        margin: 0,
        backgroundColor: this.background_primary,
        color: this.text_primary,
        fontFamily: this.font_family,
        fontSize: this.font_size,
      },
      "#root": {
        minHeight: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      },
      img: {
        maxWidth: "100%",
        height: "auto",
        verticalAlign: "middle",
      },
      main: {
        flexGrow: 1,
        display: "flex",
      },
      footer: {
        textAlign: "center",
        fontSize: "smaller",
      },
    };
  }
}
