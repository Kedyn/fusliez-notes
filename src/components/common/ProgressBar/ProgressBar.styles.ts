import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  progressBar: (props) => ({
    background: props.progressColor,
    height: "1.75rem",
    borderRadius: "1rem",
    width: props.progress ? `${props.progress}%` : "0%",
    maxWidth: "100%",
  }),
  progressBarContainer: (props) => ({
    background: props.backgroundColor,
    position: "relative",
    borderRadius: "1rem",
    width: "100%",
  }),
  titleContainer: {
    color: theme.text_primary,
    display: "flex",
    justifyContent: "space-between",
    // position: "absolute",
    textAlign: "center",
    width: "100%",
    lineHeight: 1.2,
  },
}));
