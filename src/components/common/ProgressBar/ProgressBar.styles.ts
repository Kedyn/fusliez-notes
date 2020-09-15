import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {
    background: (props) =>
      props.backgroundColor
        ? props.backgroundColor
        : theme.background_secondary,
    position: "relative",
    borderRadius: "0.5rem",
    width: "100%",
  },
  progressBar: {
    background: (props) =>
      props.progressColor ? props.progressColor : theme.background_tertiary,
    height: "1.75rem",
    borderRadius: "0.25rem",
    width: (props) => (props.progress ? `${props.progress}%` : "0%"),
    maxWidth: "100%",
  },
  title: {
    color: "#ffffff",
    position: "absolute",
    top: 0,
    left: 0,
    textAlign: "center",
    width: "100%",
    lineHeight: 1.2,
  },
}));
