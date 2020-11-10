import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

const SwitchHeight = 2; // height in rem
const SwitchWidth = 3.75; // width in rem
const SwitchGap = 0.125; // percent of height that is not knob

export default createUseStyles((theme: ITheme) => ({
  Switch: {
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "center",
    justifyContent: "space-between",
  },
  SwitchLabel: {
    display: "inline-block",
    padding: "0.5rem 0",
  },
  SwitchButton: {
    appearance: "none",
    backgroundColor: theme.borderColor,
    borderRadius: `${SwitchHeight / 2}rem/50%`,
    border: "none",
    width: `${SwitchWidth}rem`,
    height: `${SwitchHeight}rem`,
    display: "inline-block",
    overflow: "hidden",
    outline: "none",
    position: "relative",
    cursor: "pointer",
    transition: "background-color ease 0.2s",
    marginLeft: "1rem",
    marginRight: "1rem",
    boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.25)",
    "&::before": {
      position: "absolute",
      content: '""',
      display: "block",
      height: "0.5rem",
      left: "0.6rem",
      top: "0.7rem",
      width: "1rem",
      transform: "rotate(-45deg)",
      borderLeft: `0.25rem solid ${theme.textColorPrimary}`,
      borderBottom: `0.25rem solid ${theme.textColorPrimary}`,
      opacity: 0,
      transition: "opacity 0.3s",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      display: "block",
      top: `${SwitchHeight * SwitchGap}rem`,
      left: `${SwitchHeight * SwitchGap}rem`,
      bottom: `${SwitchHeight * SwitchGap}rem`,
      height: `${SwitchHeight - 2 * (SwitchHeight * SwitchGap)}rem`,
      width: `${SwitchHeight - 2 * (SwitchHeight * SwitchGap)}rem`,
      borderRadius: "50%",
      background: theme.textColorSecondary,
      transition: "all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s",
    },
    "&:checked": {
      backgroundColor: theme.activeColor,
    },
    "&:checked::before": {
      opacity: 1,
    },
    "&:checked::after": {
      left: `calc(100% - ${SwitchHeight - SwitchHeight * SwitchGap}rem)`,
    },
  },
}));
