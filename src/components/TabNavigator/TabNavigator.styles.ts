import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    bottom: 0,
    height: window.screen.orientation.type.includes("portrait") ? "15%" : "23%",
  },
  activeTab: {
    borderBottom: `6px solid ${theme.buttonTextColor}`,
  },
  icon: {
    height: "1.5rem",
    color: theme.buttonTextColor,
    width: "1.5rem",
  },
  tab: {
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.buttonBackgroundColor,
    color: theme.buttonTextColor,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "1.1rem",
    padding: "0.25rem",
  },
  tabsContainer: {
    display: "flex",
  },
}));
