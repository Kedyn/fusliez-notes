import { createUseStyles } from "react-jss";

export default createUseStyles({
  MainContent: (props) => ({
    margin: props.isMobile ? "1rem" : 0,
    padding: props.isMobile ? 0 : "1rem",
    maxWidth: props.isMobile ? "none" : "22.5rem",
    height: "100%",
  }),
});
