import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  container: (props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.25rem",
    border: `1px solid ${theme.border}`,
    padding: "0 0.25rem",
    margin: "0.25rem 0",
    backgroundColor: props.name
      ? `rgba(${props.backgroundColor}, 0.75)`
      : "transparent",
  }),
  player: {
    padding: "0.25rem",
  },
  name: {
    flexGrow: 1,
    padding: "0.25rem",
  },
  input: (props) => ({
    width: "100%",
    fontWeight: 700,
    letterSpacing: "0.05rem",
    fontSize: props.name ? "1.5rem" : "1.25rem",
    lineHeight: 1.5,
    borderRadius: ".2rem",
    textAlign: "left",
  }),
}));
