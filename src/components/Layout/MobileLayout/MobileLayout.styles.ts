import { createUseStyles } from "react-jss";

export default createUseStyles({
  MobileLayout: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "4rem",
  },
  MobileContent: {
    minHeight: "calc(100vh - 4rem)",
    minHeight: "calc((var(--vh, 1vh) * 100) - 4rem)",
  },
  MobileScoresContent: (props) => ({
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "1rem",
    padding: 0,
    width: "auto",
  }),
});
