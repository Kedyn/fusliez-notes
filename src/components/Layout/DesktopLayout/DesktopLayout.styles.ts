import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  DesktopContent: {
    flexGrow: 1,
    display: "flex",
  },
  DesktopDivider: {
    width: "1px",
    backgroundColor: theme.borderColor,
  },
  DesktopMapButton: {
    width: "1rem",
    padding: "0.25rem",
    borderRadius: "0",
  },
}));
