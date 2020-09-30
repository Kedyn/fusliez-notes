import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {},
  recordContainer: (props) => ({
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: props.orientation === "portrait" ? "column" : "row",
    justifyContent: "space-around",
    padding: "0.5rem",
    width: "100%",
  }),
});
