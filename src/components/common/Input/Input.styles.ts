import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Input: {
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  InputLabel: {
    display: "inline-block",
    padding: "0.5rem 0",
  },
  InputBox: {
    width: "3.75rem",
    height: "2rem",
    display: "inline-block",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}));
