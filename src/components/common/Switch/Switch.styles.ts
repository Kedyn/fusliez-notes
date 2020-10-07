import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import { hexToRGB } from "utils/colorConverter";

export default createUseStyles((theme: ITheme) => ({
  toggle: {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    minWidth: "3rem",
    height: "1.1rem",
    display: "inline-block",
    position: "relative",
    borderRadius: "2rem",
    overflow: "hidden",
    outline: "none",
    border: "none",
    cursor: "pointer",
    backgroundColor: `rgba(${hexToRGB(theme.linkColor)}, 0.5)`,
    transition: "background-color ease 0.3s",
    margin: "0.5rem 0",
    marginRight: "0.5rem",

    "&:before": {
      content: '"on off"',
      display: "block",
      position: "absolute",
      zIndex: "2",
      width: "1rem",
      height: "1rem",
      background: theme.buttonTextColor,
      borderRadius: "50%",
      textTransform: "uppercase",
      textIndent: "-1.6rem",
      wordSpacing: "1.4rem",
      color: theme.buttonTextColor,
      fontSize: "0.75rem",
      padding: "0.125rem 0",
      whiteSpace: "nowrap",
      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
      transition: "all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s",
    },
    "&:checked": {
      backgroundColor: theme.linkColor,
    },
    "&:checked:before": {
      left: "2rem",
    },
  },
  toggleContainer: {
    display: "flex",
    margin: "0.5rem 0",
  },
}));
