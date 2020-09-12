import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
  },
  logo: {
    width: 60,
  },
  title: {
    flexGrow: 1,
  },
  h2: {
    fontSize: "2rem",
  },
}));
