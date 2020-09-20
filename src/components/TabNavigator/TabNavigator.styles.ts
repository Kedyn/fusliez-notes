import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    position: "sticky",
    bottom: 0,
  },
  activeTab: {
    borderBottom: `5px solid ${theme.text_primary}`,
  },
  icon: {
    height: "48px",
    width: "48px",
  },
  tab: {
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.background_secondary,
    color: theme.text_primary,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "1.25rem",
    padding: "0.5rem",
  },
}));
