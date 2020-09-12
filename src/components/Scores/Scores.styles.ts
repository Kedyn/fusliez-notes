import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  progress: {
    backgroundColor: theme.background_danger,
    position: "relative",
    borderRadius: "0.5rem",
  },
  progressBar: {
    backgroundColor: theme.background_success,
    height: "2rem",
    borderRadius: "0.5rem",
  },
  title: {
    color: "#ffffff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
}));
