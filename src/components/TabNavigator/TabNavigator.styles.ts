import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    bottom: 0,
    maxHeight: "20vh",
  },
  activeTab: {
    borderBottom: `6px solid ${theme.buttonTextColor}`,
  },
  icon: {
    height: "2rem",
    color: theme.buttonTextColor,
    width: "2rem",
  },
  tab: {
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.buttonBackgroundColor,
    color: theme.buttonTextColor,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "1.25rem",
    padding: "0.5rem",
  },
  tabsContainer: {
    display: "flex",
  },
}));
