import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Score: {
    backgroundColor: theme.backgroundColorSecondary,
    color: theme.textColorPrimary,
    borderTop: `1px solid ${theme.borderColor}`,
    borderBottom: `1px solid ${theme.borderColor}`,
    display: "block",
    fontSize: "1.25rem",
    fontWeight: 600,
    height: "100%",
    padding: "0 0.5rem",
    textAlign: "center",
    appearance: "textfield",
    width: "2rem",
  },
}));
