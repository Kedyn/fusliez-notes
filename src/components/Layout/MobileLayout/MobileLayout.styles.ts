import { createUseStyles } from "react-jss";

export default createUseStyles({
  MobileLayout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    maxHeight: "100vh",
  },
  MobileContent: {
    overflowY: "auto",
    flexGrow: 1,
  },
  MobileScoresContent: (props) => ({
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection:
      props.isMobile && props.orientation === "portrait" ? "column" : "row",
    justifyContent: "space-around",
    margin: "1rem",
    padding: 0,
    width: "auto",
  }),
});
