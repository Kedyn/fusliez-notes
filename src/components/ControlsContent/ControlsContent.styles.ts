import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  scoreButtons: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.5rem",
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
  scoreButtonsSection: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
  },
  reset: {
    fontSize: "1rem",

    "&+button": {
      marginLeft: "0.5rem",
    },
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
  settingsButton: {
    marginTop: "0.5rem",
    backgroundColor: "slategray",

    "&:hover": {
      backgroundColor: `rgba(${hexToRGB("slategray")},0.75)`,
    },
  },
  notesContainer: {
    flexGrow: 1,
  },
  notes: {
    fontSize: "1.25rem",
    width: "100%",
    minHeight: "350px",
    height: "100%",
    backgroundColor: theme.neutralBackgroundColor,
  },
  resetNotes: {
    marginTop: "0.5rem",
  },
}));
