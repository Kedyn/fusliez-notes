import { ITheme } from "utils/types";
import { JssStyle } from "jss";

export default class DefaultTheme implements ITheme {
  public name: string;

  public background_primary: string;
  public background_secondary: string;
  public background_tertiary: string;
  public background_success: string;
  public background_danger: string;
  public text_primary: string;
  public text_secondary: string;
  public text_shadow: string;
  public font_family: string;
  public font_size: number;
  public border: string;

  public global: JssStyle;

  public constructor() {
    this.name = "default";

    this.background_primary = "#ffffff";
    this.background_secondary = "#6c757d";
    this.background_tertiary = "#343a40";
    this.background_success = "#28a745";
    this.background_danger = "rgba(220, 53, 69, 0.5)";
    this.text_primary = "#000000";
    this.text_secondary = "#343a40";
    this.text_shadow =
      "rgb(255, 255, 255) -1px -1px 0px, rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) 1px 1px 0px";
    this.font_family = "Titillium Web, sans-serif";
    this.font_size = 20;
    this.border = "#000000";

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
      'input[type="text"],input[type="number"],input[type="text"]:focus,input[type="number"]:focus': {
        background: "transparent",
        appearance: "none",
        border: "none",
        boxShadow: "none",
        color: this.text_primary,
      },
      textarea: {
        fontFamily: "inherit",
        padding: ".375rem .75rem",
        border: `1px solid ${this.border}`,
        borderRadius: "0.25rem",
      },
      button: {
        textAlign: "center",
        border: "1px solid transparent",
        padding: ".375rem .75rem",
        fontFamily: "inherit",
        borderRadius: "0.25rem",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        display: "block",
        width: "100%",
        cursor: "pointer",
      },
      main: {
        flexGrow: 1,
        display: "flex",
      },
      h1: {
        fontSize: "2rem",
        margin: 0,
      },
      h2: {
        fontSize: "2rem",
        margin: ".5rem 0",
        fontWeight: "500",
        lineHeight: "1.2",
      },
      "#main": {
        maxWidth: 320,
        minWidth: 320,
      },
      "#controls": {
        maxWidth: 320,
        minWidth: 320,
      },
      "#maps": {
        flexGrow: 1,
      },
      ".player-handle": {
        cursor: "grab",

        "&:active": {
          cursor: "grabbing",
        },
      },
      ".blue": {
        backgroundColor: "blue",
      },
      ".brown": {
        backgroundColor: "brown",
      },
      ".gray": {
        backgroundColor: "gray",
      },
      ".green": {
        backgroundColor: "green",
      },
      ".lightGreen": {
        backgroundColor: "lightGreen",
      },
      ".orange": {
        backgroundColor: "orange",
      },
      ".pink": {
        backgroundColor: "pink",
      },
      ".purple": {
        backgroundColor: "purple",
      },
      ".red": {
        backgroundColor: "red",
      },
      ".teal": {
        backgroundColor: "teal",
      },
      ".white": {
        backgroundColor: "white",
      },
      ".yellow": {
        backgroundColor: "yellow",
      },
      footer: {
        textAlign: "center",
        fontSize: "smaller",
      },
      a: {
        textDecoration: "none",
        color: "orange",
      },
      [`@media (max-width: 1200px)`]: {
        "#maps": { display: "none" },
      },
    };
  }
}
