import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  input: {
    backgroundColor: `${theme.inputBackgroundColor} !important`,
    fontSize: "1.75rem",
    width: "2rem",
    textAlign: "center",
    appearance: "textfield !important",
    "-moz-appearance": "textfield !important",
    color: `${theme.inputTextColor} !important`,
  },
}));
