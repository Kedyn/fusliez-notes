import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: (props) => ({
    margin: props.isMobile ? "1rem" : 0,
    width: props.isMobile ? "auto" : 320,
  }),
});
