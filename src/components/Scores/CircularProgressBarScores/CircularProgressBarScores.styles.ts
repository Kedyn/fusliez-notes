import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0",
  },
  progressBarContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    margin: "0 0.25rem",
  },
  bigCircle: {
    width: "100px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  smallCircle: {
    width: "80px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progress: {
    marginBottom: "0.5rem",
  },
  title: {
    marginBottom: "0.5rem",
  },
  percentage: {
    fontSize: "0.75rem",
    fontWeight: "bold",
    lineHeight: "1rem",
  },
  scores: {
    fontSize: "0.75rem",
  },
  bigPercentage: {
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1rem",
  },
  bigScores: {
    fontSize: "1rem",
  },
});
