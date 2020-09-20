import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    margin: "0.5rem 0",
    flex: 1,
  },
  progress: {
    marginBottom: "0.5rem",
  },
  progressBarsContainer: (props) => ({
    padding: props.isMobile ? "1rem 2rem" : "0",
  }),
  scores: {
    display: "flex",
  },
});
