import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: props.isMobile ? "1rem" : "0",
    width: "100%",
  }),
  notes: (props) => ({
    fontSize: "1.25rem",
    flex: "4 1 auto",
    width: "100%",
    height: !props.isMobile
      ? "350px"
      : props.orientation === "landscape"
      ? window.innerHeight * 0.55
      : window.innerHeight * 0.65,
    backgroundColor: theme.neutralBackgroundColor,
  }),
  notesContainer: {
    flexGrow: 5,
  },
  resetNotes: {
    flex: 1,
    marginTop: "0.5rem",
  },
}));
