import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

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
  settingsButton: {
    marginTop: "0.5rem",
    backgroundColor: "slategray",

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB("slategray")},0.75)`,
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "0.5rem",
  },
  title: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
}));
