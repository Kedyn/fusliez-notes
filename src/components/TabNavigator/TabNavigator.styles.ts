import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "195px",
    width: "100%",
    borderTop: `1px solid ${theme.borderColor}`,
  },
  tabsContainer: {
    display: "flex",
    height: "100%",
  },
  tab: {
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.backgroundColorAlt,
    borderRadius: "0",
    color: theme.buttonTextColor,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "0.75rem",
    justifyContent: "center",
    padding: "0.5rem 0.25rem",
    letterSpacing: "0.05em",
  },
  activeTab: {
    backgroundColor: theme.activeColor,
  },
  label: {
    display: "inline-block",
    marginTop: "0.5rem",
  },
}));
