import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {},
  players: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "2rem",

    "&>div": {
      flex: (props) => `0 0 ${props.names ? "50%" : "25%"}`,
      maxWidth: "50%",
      padding: "0.25rem",
    },
  },
});
