import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: (props) => ({
    display: "flex",
    flexWrap: "wrap",
    padding: props.isMobile ? "1rem" : "0",
  }),
  uiContainer: {
    paddingRight: "0.5rem",
  },
  content: {
    paddingLeft: "1rem",
  },
});
