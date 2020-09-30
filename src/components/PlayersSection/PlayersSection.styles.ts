import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: (props) => ({
    padding: "0.1rem",
    width: "100%",
    paddingBottom: props.isMobile ? "5rem" : "0.1rem",
  }),
});
