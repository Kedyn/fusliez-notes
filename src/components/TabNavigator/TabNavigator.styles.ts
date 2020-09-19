import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flex: 4,
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
    border: "none",
    boxSizing: "border-box",
    backgroundColor: theme.background_secondary,
    color: theme.text_primary,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontSize: "1.25rem",
  },
}));
