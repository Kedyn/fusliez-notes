import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  ScoreControls: {},
  buttonContainer: {
    display: "flex",
    marginTop: "1rem",
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
  scoreButtons: (props) => ({
    display: "flex",
    marginTop: props.isMobile ? "1rem" : "0.5rem",
    marginBottom: "0.5rem",
  }),
  scoreButtonsSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
  },
  title: {
    flex: 1,
    textAlign: "center",
    width: "100%",
    padding: "0 0.25rem",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "0.5rem",
  },
}));
