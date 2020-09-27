import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    margin: props.isMobile ? "0.5rem 1rem" : "",
  }),
  notes: (props) => ({
    fontSize: "1.25rem",
    width: "100%",
    minHeight: props.isMobile ? "60vh" : "350px",
    maxHeight: props.isMobile ? "60vh" : "",
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
