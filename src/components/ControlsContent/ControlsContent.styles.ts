import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  notes: {
    fontSize: "1.25rem",
    width: "100%",
    minHeight: "350px",
    backgroundColor: theme.neutralBackgroundColor,
  },
  dangerButton: {
    backgroundColor: "darkred",
  },
  reset: {
    color: "#ffffff",
    fontSize: "1rem",
    margin: "0.5rem",
    "&:hover": {
      backgroundColor: "#5a6268", // should not be hard coded but just for now
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
    padding: "0 1rem",
    width: "100%",
  },
  switchesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0.5rem 0",
  },
  title: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "0.5rem",
  },
}));
