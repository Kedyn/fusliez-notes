import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  winsLossesButtonContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    height: "100%",
    width: "100px",
    margin: "0.25rem",
  },
  winsLossesButton: {
    margin: 0,
    "&:hover": {
      backgroundColor: theme.innocentBackgroundColor,
    },
  },
  winsLossesButtonLeft: (props) => ({
    backgroundColor: props.buttonBackgroundColor,
    borderRadius: "6px 0 0 6px",
  }),
  winsLossesButtonRight: (props) => ({
    backgroundColor: props.buttonBackgroundColor,
    borderRadius: "0 6px 6px 0",
  }),
}));
