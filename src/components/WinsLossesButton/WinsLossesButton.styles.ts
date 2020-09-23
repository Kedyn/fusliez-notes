import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  winsLossesButtonContainer: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    width: "100px",
    marginLeft: "0.5rem",
  },
  winsLossesButton: {
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
