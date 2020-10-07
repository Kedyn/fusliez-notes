import { createUseStyles } from "react-jss";

export default createUseStyles({
  MainContent: (props) => ({
    margin: props.isMobile ? "1rem" : 0,
    padding: props.isMobile ? 0 : "1rem",
    width: props.isMobile ? "auto" : 360,
  }),
});
