import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  DesktopContent: {
    flexGrow: 1,
    display: "flex",
  },
  DesktopDivider: {
    width: "1px",
    backgroundColor: theme.borderColor,
  },
}));
