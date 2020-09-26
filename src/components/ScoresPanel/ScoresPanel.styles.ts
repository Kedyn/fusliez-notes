import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  buttonContainer: {
    display: "flex",
  },
  dangerButton: {
    marginTop: "0.5rem",
    backgroundColor: theme.buttonDangerBackgroundColor,
    color: theme.buttonDangerTextColor,

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB(
        theme.buttonDangerBackgroundColor
      )}, 0.75)`,
    },
  },
  reset: {
    fontSize: "1rem",

    "&+button": {
      marginLeft: "0.5rem",
    },
  },
  scoreButtons: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.5rem",
  },
  scoreButtonsSection: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "0.5rem",
  },
}));
