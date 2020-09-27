import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
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
}));
