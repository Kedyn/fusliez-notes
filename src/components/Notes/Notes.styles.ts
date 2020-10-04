import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: props.isMobile ? "1rem" : "0",
    width: "100%",
  }),
  notes: (props) => ({
    fontSize: "1.25rem",
    width: "100%",
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
