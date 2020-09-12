import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    width: "100%",
    padding: "0 0.5rem",
    textAlign: "center",
  },
}));
