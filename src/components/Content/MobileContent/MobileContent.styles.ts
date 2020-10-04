import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    maxHeight: "100vh",
  },
  content: {
    overflowY: "auto",
    flexGrow: 1,
  },
  recordContainer: (props) => ({
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection:
      props.isMobile && props.orientation === "portrait" ? "column" : "row",
    justifyContent: "space-around",
    padding: "0.5rem",
    width: "100%",
  }),
});
