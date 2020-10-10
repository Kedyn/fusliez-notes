import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Footer: {
    backgroundColor: theme.backgroundColor,
    padding: "0.5rem",
  },
}));
