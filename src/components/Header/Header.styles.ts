import { createUseStyles } from "react-jss";
import { ITheme } from "utils/types";

export default createUseStyles((theme: ITheme) => ({
  root: {
    display: "flex",
    borderBottom: `2px solid ${theme.text_secondary}`,
    padding: "0.25rem 0.5rem",
  },
  logo: {
    width: 60,
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  titleInput: {
    fontSize: "2rem",
    padding: "0 0.25rem",
  },
}));
