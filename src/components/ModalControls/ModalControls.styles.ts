import { createUseStyles } from "react-jss";

export default createUseStyles({
  ModalControls: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: "1rem",

    "& :not(:first-child):not(:last-child)": {
      margin: "0 0.25rem",
    },
  },
  ModalControlsButton: {
    flex: "1 1 auto",
    maxWidth: "100%",
  },
});
