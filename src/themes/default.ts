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

  public buttonDangerBackgroundColor: string;
  public buttonDangerTextColor: string;

  public borderColor: string;

  public linkColor: string;

  public fontFamily: string;
  public fontSize: number;

  // public oneColumn: string;
  // public twoColumn: string;

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

    this.buttonDangerBackgroundColor = "#8B0000";
    this.buttonDangerTextColor = "#fdfdfd";

    this.borderColor = "#000000";

    this.linkColor = "#ee54bb";

    this.fontFamily = "Titillium Web, sans-serif";
    this.fontSize = 20;

    // this.oneColumn = "@media (max-width: 425px)";
    // this.twoColumn = "@media (max-width: 768px)";

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
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100vw",
        overflowX: "hidden",
      },
      main: {
        flexGrow: 1,
        display: "flex",
        margin: "0 1rem",

        // [this.oneColumn]: {
        //   margin: 0,
        //   flexDirection: "column",
        // },
        // [this.twoColumn]: {
        //   flexWrap: "wrap",
        // },
      },
      footer: {
        textAlign: "center",
        fontSize: "smaller",
      },
      "#main": {
        padding: "0.25rem",
        height: "100%",
        // width: 320,
        // minWidth: 320,
        // padding: "1rem",

        // [this.oneColumn]: {
        //   width: "100vw",
        // },
      },
      "#controls": {
        // width: 320,
        // minWidth: 320,
        padding: "1rem",

        // [this.oneColumn]: {
        //   width: "100vw",
        // },
        // [this.twoColumn]: {
        //   flexGrow: 1,
        // },
      },
      "#maps": {
        flexGrow: 1,
      },
      h1: {
        fontSize: "2rem",
        margin: 0,
      },
      h2: {
        fontSize: "1.75rem",
        margin: ".5rem 0",
        fontWeight: "500",
        lineHeight: "1.2",
      },
      h3: {
        margin: 0,
      },
      h4: {
        margin: ".5rem 0",
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
      "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "input[type=number]": {
        "-moz-appearance": "textfield",
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
      ul: {
        marginTop: 0,
      },
      li: {
        fontSize: "1rem",
      },
    };
  }
}
