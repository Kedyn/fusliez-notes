import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    margin: "0.5rem 0",
  },
  progress: {
    marginBottom: "0.5rem",
  },
  scores: {
    display: "flex",
  },
}));
