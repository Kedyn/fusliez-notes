import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  Navbar: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "195px",
    width: "100%",
    borderTop: `1px solid ${theme.borderColor}`,
  },
  NavbarContainer: {
    display: "flex",
    height: "100%",
  },
  NavbarItem: {
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColorAlt,
    borderRadius: "0",
    color: theme.textColorAlt,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "0.75rem",
    justifyContent: "center",
    padding: "0.5rem 0.25rem",
    letterSpacing: "0.05em",
  },
  isActive: {
    backgroundColor: theme.activeColor,
  },
  NavbarItemLabel: {
    display: "inline-block",
    marginTop: "0.5rem",
  },
}));
