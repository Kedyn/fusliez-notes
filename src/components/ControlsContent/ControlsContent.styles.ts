import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    minWidth: 320,
    padding: "0.5rem",
  },
  scoreButtons: {
    display: "flex",
    marginBottom: "0.5rem",
  },
  win: {
    backgroundColor: "#28a745", // should not be hard coded but just for now
    color: "#ffffff",
    fontSize: "1rem",
    marginRight: "0.25rem",

    "&:hover": {
      backgroundColor: "#218838", // should not be hard coded but just for now
    },
  },
  lose: {
    backgroundColor: "#dc3545", // should not be hard coded but just for now
    color: "#ffffff",
    fontSize: "1rem",
    marginLeft: "0.25rem",

    "&:hover": {
      backgroundColor: "#c82333", // should not be hard coded but just for now
    },
  },
  reset: {
    backgroundColor: theme.background_secondary,
    color: "#ffffff",
    fontSize: "1rem",

    "&:hover": {
      backgroundColor: "#5a6268", // should not be hard coded but just for now
    },
  },
  notes: {
    width: "100%",
  },
}));
