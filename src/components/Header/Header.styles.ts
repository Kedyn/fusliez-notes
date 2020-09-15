import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    display: "flex",
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
});
