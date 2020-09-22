import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},

  placeholder: {
    position: "absolute",
    left: "39%",
    backgroundColor: theme.buttonTextColor,
    borderRadius: "6px",
    width: "36px",
    height: "36px",
  },

  winsLossesButton: {
    marginLeft: "0.5rem",
    "&:hover": {
      backgroundColor: theme.innocentBackgroundColor,
    },
  },
  winsLossesButtonContainer: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    width: "100px",
  },
  winsLossesButtonLeft: (props) => ({
    backgroundColor: props.buttonBackgroundColor,
    borderRadius: "6px 0 0 6px",
    paddingRight: "1.5rem",
  }),
  winsLossesButtonRight: (props) => ({
    backgroundColor: props.buttonBackgroundColor,
    borderRadius: "0 6px 6px 0",
    paddingLeft: "1.5rem",
  }),
}));
