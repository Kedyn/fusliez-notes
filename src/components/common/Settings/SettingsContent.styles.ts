import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: (props) => ({
    display: "flex",
    flexWrap: "wrap",
    padding: props.isMobile ? "1rem" : "0",
  }),
  uiContainer: {
    paddingRight: "0.5rem",
  },
  content: {
    paddingLeft: "1rem",
  },
  themeContainer: (props) => ({
    paddingLeft: "0.5rem",
    paddingTop: props.isMobile ? "1rem" : "0",
  }),
  themeButtons: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "260px",
  },
  themeButton: {
    minHeight: "2rem",
    width: "2rem",
    margin: "0.5rem",
    display: "inline",
    border: `1px solid ${theme.borderColor}`,
    borderRadius: "1rem",
  },
  themeDescription: {
    textAlign: "center",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  resetTheme: {
    marginTop: "1rem",
  },
}));
