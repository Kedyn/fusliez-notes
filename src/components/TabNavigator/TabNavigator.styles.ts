import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "195px",
    width: "100%",
  },
  activeTab: {
    backgroundColor: `${theme.backgroundColor} !important`,
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
    borderRadius: "0",
    color: theme.buttonTextColor,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "1.1rem",
    justifyContent: "center",
    padding: "0.25rem",
  },
  tabsContainer: {
    display: "flex",
    height: "100%",
  },
}));
