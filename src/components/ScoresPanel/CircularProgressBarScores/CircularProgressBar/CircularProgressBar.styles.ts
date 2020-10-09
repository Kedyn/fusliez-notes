import { createUseStyles } from "react-jss";

export default createUseStyles({
  CircularBar: (props) => ({
    fontSize: props.isMobile ? "0.5rem" : "1rem",
  }),
});
