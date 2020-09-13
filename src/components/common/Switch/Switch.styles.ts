import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  root: {},
  toggle: {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    width: "3rem",
    height: "1rem",
    display: "inline-block",
    position: "relative",
    borderRadius: "2rem",
    overflow: "hidden",
    outline: "none",
    border: "none",
    cursor: "pointer",
    backgroundColor: theme.background_tertiary,
    transition: "background-color ease 0.3s",
    margin: "auto",
    marginRight: "0.5rem",

    "&:before": {
      content: '"on off"',
      display: "block",
      position: "absolute",
      zIndex: "2",
      width: "1rem",
      height: "1rem",
      background: "#fff",
      borderRadius: "50%",
      textTransform: "uppercase",
      fontWeight: "bold",
      textIndent: "-1.5rem",
      wordSpacing: "1.5rem",
      color: "#ffffff",
      textShadow: "-1px -1px rgba(0,0,0,0.15)",
      whiteSpace: "nowrap",
      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
      transition: "all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s",
    },
    "&:checked": {
      backgroundColor: theme.background_secondary,
    },
    "&:checked:before": {
      left: "2rem",
    },
  },
}));
