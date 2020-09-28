import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    margin: props.isMobile ? "0.5rem 1rem" : "",
    height: "100%",
  }),
  notes: (props) => ({
    fontSize: "1.25rem",
    flex: 1,
    width: "100%",
    minHeight: props.isMobile ? "55vh" : "350px",
    height: "100%",
    backgroundColor: theme.neutralBackgroundColor,
  }),
  notesContainer: {
    flexGrow: 1,
  },
  resetNotes: {
    marginTop: "0.5rem",
  },
}));
