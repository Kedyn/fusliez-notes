import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Navbar: {
    flex: "0 0 3.5rem",
    height: "3.5rem",
    width: "100%",
    borderTop: `1px solid ${theme.borderColor}`,
    zIndex: 10,
  },
  NavbarContainer: {
    display: "flex",
    height: "100%",
  },
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
    "&:hover": {
      backgroundColor: theme.backgroundColorPrimary,
    },
  },
  isActive: {
    backgroundColor: theme.activeColor,
  },
  NavbarItemLabel: {
    display: "inline-block",
    marginTop: "0.5rem",
  },
}));
