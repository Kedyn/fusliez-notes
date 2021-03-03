import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

const SWITCH_HEIGHT = 2; // height in rem
const SWITCH_WIDTH = 3.75; // width in rem
const SWITCH_GAP = 0.125; // percent of height that is not knob

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
    borderRadius: `${SWITCH_HEIGHT / 2}rem/50%`,
    border: "none",
    width: `${SWITCH_WIDTH}rem`,
    height: `${SWITCH_HEIGHT}rem`,
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
      top: `${SWITCH_HEIGHT * SWITCH_GAP}rem`,
      left: `${SWITCH_HEIGHT * SWITCH_GAP}rem`,
      bottom: `${SWITCH_HEIGHT * SWITCH_GAP}rem`,
      height: `${SWITCH_HEIGHT - 2 * (SWITCH_HEIGHT * SWITCH_GAP)}rem`,
      width: `${SWITCH_HEIGHT - 2 * (SWITCH_HEIGHT * SWITCH_GAP)}rem`,
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
      left: `calc(100% - ${SWITCH_HEIGHT - SWITCH_HEIGHT * SWITCH_GAP}rem)`,
    },
  },
}));
