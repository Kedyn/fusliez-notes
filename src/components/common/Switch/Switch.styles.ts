import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Switch: {
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "center",
  },
  SwitchControl: {
    appearance: "none",
    width: "4rem",
    height: "2rem",
    lineHeight: "1.75rem",
    display: "inline-block",
    position: "relative",
    borderRadius: "2rem",
    overflow: "hidden",
    outline: "none",
    border: "none",
    cursor: "pointer",
    backgroundColor: theme.borderColor,
    transition: "background-color ease 0.2s",
    marginRight: "1rem",
    boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.25)",

    "&:before": {
      content: '"on off"',
      display: "block",
      position: "absolute",
      zIndex: "2",
      left: 0,
      width: "1.75rem",
      height: "1.75rem",
      background: theme.textColorAlt,
      borderRadius: "50%",
      textTransform: "uppercase",
      textIndent: "-1.6rem",
      wordSpacing: "2.4rem",
      color: theme.textColorAlt,
      fontSize: "0.75rem",
      margin: "0.125rem 0",
      whiteSpace: "nowrap",
      boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
      transition: "all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s",
    },
    "&:checked": {
      backgroundColor: theme.activeColor,
    },
    "&:checked:before": {
      left: "2rem",
    },
  },
  SwitchLabel: {
    display: "inline-block",
    padding: "0.5rem 0",
  },
}));
