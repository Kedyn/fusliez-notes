import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  circularBar: (props) => ({
    fontSize: props.isMobile ? "0.5rem" : "1rem",
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
}));
