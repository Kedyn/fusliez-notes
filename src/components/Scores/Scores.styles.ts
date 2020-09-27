import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    margin: "0.5rem 0",
  },
  progressBarContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    margin: "0 0.5rem",
  },
  progress: {
    marginBottom: "0.5rem",
  },
  title: {
    marginBottom: "0.5rem",
  },
});
