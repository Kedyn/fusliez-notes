import DefaultTheme from "./default";

export default class DarkTheme extends DefaultTheme {
  public constructor() {
    super();

    this.name = "dark";

    this.backgroundColor = "#202225";
    this.textColor = "#f6edf6";

    this.inputBackgroundColor = "#f6edf6";
    this.inputTextColor = "#202225";

    this.neutralBackgroundColor = "#f0c5e2";
    this.neutralTextColor = "#ee54bb";

    this.innocentBackgroundColor = "#ccbed3";
    this.innocentTextColor = "#905da9";

    this.impostorBackgroundColor = "#c9cfe7";
    this.impostorTextColor = "#7289da";

    this.buttonBackgroundColor = "#6b2fbc";
    this.buttonTextColor = "#f6df6";

    this.borderColor = "#000000";

    this.global = {
      body: {
        backgroundColor: this.backgroundColor,
        color: this.textColor,
      },
      // 'input[type="text"],input[type="number"],input[type="text"]:focus,input[type="number"]:focus': {
      //   backgroundColor: this.inputBackgroundColor,
      //   color: this.inputTextColor,
      // },
      textarea: {
        backgroundColor: this.inputBackgroundColor,
        color: this.inputTextColor,
      },
      button: {
        backgroundColor: this.buttonBackgroundColor,
        color: this.buttonTextColor,
      },
      a: {
        color: this.linkColor,
      },
    };
  }
}
