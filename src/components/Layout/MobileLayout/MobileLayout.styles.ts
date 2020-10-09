import { createUseStyles } from "react-jss";

export default createUseStyles({
  MobileLayout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    height: "calc(var(--vh, 1vh) * 100)",
  },
  MobileContent: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    paddingBottom: "1rem",
  },
  MobileScoresContent: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "1rem",
    padding: 0,
    width: "auto",
  },
});
