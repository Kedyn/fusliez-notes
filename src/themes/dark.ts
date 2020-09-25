import DefaultTheme from "./default";
import { hexToRGB } from "utils/colorConverter";

export default class DarkTheme extends DefaultTheme {
  public constructor() {
    super();

    this.name = "dark";

    this.backgroundColor = "#202225";
    this.textColor = "#ffffff";

    this.inputBackgroundColor = "#f6edf6";
    this.inputTextColor = "#202225";

    this.neutralBackgroundColor = "#f0c5e2";
    this.neutralTextColor = "#ee54bb";

    this.innocentBackgroundColor = "#ccbed3";
    this.innocentTextColor = "#905da9";

    this.impostorBackgroundColor = "#c9cfe7";
    this.impostorTextColor = "#7289da";

    this.buttonBackgroundColor = "#6b2fbc";
    this.buttonTextColor = "#ffffff";

    this.buttonDangerBackgroundColor = "#8B0000";
    this.buttonDangerTextColor = "#ffffff";

    this.borderColor = "#36383a";

    this.global = {
      body: {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
      },
      textarea: {
        backgroundColor: `${this.inputBackgroundColor} !important`,
        color: `${this.inputTextColor} !important`,
      },
      button: {
        backgroundColor: this.buttonBackgroundColor,
        color: this.buttonTextColor,

        "&:hover": {
          backgroundColor: `rgba(${hexToRGB(this.buttonBackgroundColor)},0.75)`,
        },
      },
      a: {
        color: this.linkColor,
      },
    };
  }
}
