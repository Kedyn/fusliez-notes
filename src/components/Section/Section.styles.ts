import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {},
  players: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "flex-start",
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
  },
});
