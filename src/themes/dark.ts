import DefaultTheme from "./default";

export default class DarkTheme extends DefaultTheme {
  public constructor() {
    super();

    this.background_primary = "#202225";
    this.background_secondary = "#2f3136";
    this.background_tertiary = "#44484f";
    this.background_danger = "rgba(220, 53, 69, 0.5)";
    this.text_primary = "#dcddde";
    this.text_secondary = "#6c757d";

    this.global = {
      body: {
        margin: 0,
        backgroundColor: this.background_primary,
        color: this.text_primary,
        fontFamily: this.font_family,
        fontSize: this.font_size,
      },
      'input[type="text"],input[type="number"],input[type="text"]:focus,input[type="number"]:focus': {
        color: this.text_primary,
      },
    };
  }
}
