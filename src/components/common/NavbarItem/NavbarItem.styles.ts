import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  NavbarItem: {
    appearance: "none",
    border: 0,
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColorSecondary,
    borderRadius: "0",
    color: theme.textColorSecondary,
    display: "flex",
    flex: "0 0 20%",
    maxWidth: "20%",
    flexDirection: "column",
    fontSize: "0.625rem",
    justifyContent: "center",
    padding: "0.5rem 0.25rem",
    letterSpacing: "0.05em",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.backgroundColorPrimary,
    },
  },
  NavbarItemIsActive: {
    backgroundColor: theme.activeColor,
  },
  NavbarItemLabel: {
    display: "inline-block",
    marginTop: "0.5rem",
  },
}));
