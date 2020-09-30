import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: props.isMobile ? "2rem" : "",
    width: "100%",
  }),
  notes: (props) => ({
    fontSize: "1.25rem",
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: props.isMobile
      ? "55vh"
      : props.orientation === "landscape"
      ? "40vh"
      : "350px",
    backgroundColor: theme.neutralBackgroundColor,
  }),
  notesContainer: {
    flexGrow: 1,
  },
  resetNotes: {
    marginTop: "0.5rem",
  },
}));
