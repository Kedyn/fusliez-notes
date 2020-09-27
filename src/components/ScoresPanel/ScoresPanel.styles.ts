import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {},
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
    flexDirection: "column",
    marginTop: props.isMobile ? "3rem" : "0",
    marginBottom: "0.5rem",
  }),
  scoreButtonsSection: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    marginBottom: "0.5rem",
    flex: 1,
    textAlign: "center",
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "0.5rem",
  },
}));
