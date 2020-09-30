import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  input: {
    backgroundColor: `${theme.inputBackgroundColor} !important`,
    color: `${theme.inputTextColor} !important`,
    fontSize: "1.5rem",
    height: "100%",
    padding: "0.25rem",
    textAlign: "center",
    appearance: "textfield !important",
    "-moz-appearance": "textfield !important",
    width: "2rem",
  },
}));
