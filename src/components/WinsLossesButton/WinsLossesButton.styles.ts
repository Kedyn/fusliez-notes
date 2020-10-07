import { createUseStyles } from "react-jss";

export default createUseStyles({
  WinsLossesButtonContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    margin: "0.25rem 0",
  },
  winsLossesButton: (props) => ({
    margin: 0,
    fontSize: "0.75rem",
    padding: "0.375rem .5rem",
    backgroundColor: props.buttonBackgroundColor,
    "&:hover": {
      backgroundColor: props.buttonBackgroundColorHover,
    },
  }),
  winsLossesButtonLeft: {
    borderRadius: "6px 0 0 6px",
  },
  winsLossesButtonRight: {
    borderRadius: "0 6px 6px 0",
  },
});
