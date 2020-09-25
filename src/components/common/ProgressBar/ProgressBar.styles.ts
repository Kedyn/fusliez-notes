import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : theme.inputBackgroundColor,
    borderRadius: "0.5rem",
    width: "100%",
  }),
  progressBar: (props) => ({
    backgroundColor: props.progressColor
      ? props.progressColor
      : theme.inputTextColor,
    height: "0.75rem",
    borderRadius: "0.5rem",
    width: props.progress ? `${props.progress}%` : "0%",
    maxWidth: "100%",
  }),
  circularBar: {
    fontSize: "1rem",
    width: "10rem",
    height: "10rem",
  },
}));
