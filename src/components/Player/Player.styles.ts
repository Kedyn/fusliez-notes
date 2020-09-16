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
    // backgroundColor: `rgba(${props.backgroundColor}, 0.75)`,
  }),
  nonActive: {
    opacity: 0.6,
  },
  player: {
    height: "2rem",
    width: "2rem",
    minHeight: "2rem",
  },
  name: {
    flexGrow: 1,
    padding: "0.25rem",
  },
  input: {
    width: "100%",
    fontWeight: 700,
    letterSpacing: "0.05rem",
    fontSize: "1.5rem",
    padding: "0",
    lineHeight: 1.5,
    borderRadius: ".2rem",
    textAlign: "left",
    textShadow: theme.text_shadow,
  },
}));
