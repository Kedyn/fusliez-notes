import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    minWidth: 320,
    padding: "0.5rem",
  },
  notes: {
    width: "100%",
  },
}));
