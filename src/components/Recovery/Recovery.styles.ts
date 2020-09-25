import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  footer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-around",
  },
  right: {
    marginRight: "0.5rem",
  },
  left: {
    marginLeft: "0.5rem",
  },
  dangerButton: {
    backgroundColor: theme.buttonDangerBackgroundColor,
    color: theme.buttonDangerTextColor,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        theme.buttonDangerBackgroundColor
      )}, 0.75)`,
    },
  },
}));
