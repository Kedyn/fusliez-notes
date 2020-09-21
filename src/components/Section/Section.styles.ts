import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {},
  players: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",
    justifyContent: "space-between",

    "&>div": {
      flex: (props) => `0 0 ${props.names ? "49%" : "24%"}`,
    },
  },
});
