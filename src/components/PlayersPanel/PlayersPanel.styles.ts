import { createUseStyles } from "react-jss";

export default createUseStyles({
  PlayersPanel: {
    marginBottom: "1rem",
  },
  PlayersControls: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    "& button": {
      margin: "0.25rem",
      flex: "1 1 auto",
      maxWidth: "100%",
    },
  },
});
