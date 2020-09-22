import { ITheme } from "utils/types";
import { JssStyle } from "jss";

export default class DefaultTheme implements ITheme {
  public name: string;

  public backgroundColor: string;
  public textColor: string;

  public inputBackgroundColor: string;
  public inputTextColor: string;

  public neutralBackgroundColor: string;
  public neutralTextColor: string;

  public innocentBackgroundColor: string;
  public innocentTextColor: string;

  public impostorBackgroundColor: string;
  public impostorTextColor: string;

  public buttonBackgroundColor: string;
  public buttonTextColor: string;

  public borderColor: string;

  public linkColor: string;

  public fontFamily: string;
  public fontSize: number;

  public global: JssStyle;

  public constructor() {
    this.name = "default";

    this.backgroundColor = "#fdfdfd";
    this.textColor = "#202225";

    this.inputBackgroundColor = "#fdfdfd";
    // this.inputTextColor = "#202225";
    this.inputTextColor = "#000000";

    this.neutralBackgroundColor = "#ee54bb";
    this.neutralTextColor = "#fdfdfd";

    this.innocentBackgroundColor = "#905da9";
    this.innocentTextColor = "#fdfdfd";

    this.impostorBackgroundColor = "#7289da";
    this.impostorTextColor = "#fdfdfd";

    this.buttonBackgroundColor = "#6b2fbc";
    this.buttonTextColor = "#fdfdfd";

    this.borderColor = "#000000";

    this.linkColor = "#ee54bb";

    this.fontFamily = "Titillium Web, sans-serif";
    this.fontSize = 20;

    this.global = {
      "*, *:before, *:after": {
        boxSizing: "inherit",
      },
      html: {
        boxSizing: "border-box",
      },
      body: {
        margin: 0,

        backgroundColor: this.backgroundColor,
        color: this.textColor,
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100vw",
      },
      main: {
        flexGrow: 1,
        display: "flex",
      },
      footer: {
        textAlign: "center",
        fontSize: "smaller",
      },
      "#main": {
        width: 320,
        minWidth: 320,
        padding: "1rem",
      },
      "#controls": {
        width: 320,
        minWidth: 320,
        padding: "1rem",
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
      img: {
        maxWidth: "100%",
        height: "auto",
      },
      'input[type="text"],input[type="number"],input[type="text"]:focus,input[type="number"]:focus': {
        backgroundColor: "transparent",
        color: this.inputTextColor,
        appearance: "none",
        border: "none",
        boxShadow: "none",
      },
      textarea: {
        backgroundColor: this.inputBackgroundColor,
        color: this.inputTextColor,
        fontFamily: "inherit",
        padding: ".375rem .75rem",
        border: `1px solid ${this.borderColor}`,
        borderRadius: "0.5rem",
      },
      button: {
        textAlign: "center",
        border: "1px solid transparent",
        padding: ".375rem .75rem",
        fontFamily: "inherit",
        borderRadius: "0.5rem",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        display: "block",
        width: "100%",
        cursor: "pointer",
        backgroundColor: this.buttonBackgroundColor,
        color: this.buttonTextColor,
      },
      a: {
        textDecoration: "none",
        color: this.linkColor,
      },
    };
  }
}
