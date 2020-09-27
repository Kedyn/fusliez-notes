import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  recordContainer: {
    height: "100%",
    flexDirection: "column",
    margin: "1rem",
    justifyContent: "space-between",
  },
}));
