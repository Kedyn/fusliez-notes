import { contrastColor, getColorValue, hexToRGB } from "utils/colorConverter";

import { IPlayerColor } from "utils/types/players";
import { ITheme } from "utils/types/theme";
import { PLAYER_IMAGE } from "constants/players";
import { createUseStyles } from "react-jss";

interface IPlayerStylesProps {
  isMobile: boolean;
  showNames: boolean;
  isColorBlind: boolean;
  isLocked: boolean;
  color: IPlayerColor;
  name: string;
}

export default createUseStyles((theme: ITheme) => ({
  Player: (props: IPlayerStylesProps) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: props.showNames || props.isColorBlind ? "1 0 50%" : "0 0 2.5rem",
    maxWidth: props.showNames || props.isColorBlind ? "50%" : "none",
  }),
  PlayerTile: (props: IPlayerStylesProps) => ({
    alignItems: "center",
    backgroundColor:
      props.name || !props.showNames
        ? `rgb(${getColorValue(props.color, "dark")})`
        : theme.backgroundColorSecondary,
    border: "1px solid",
    borderColor:
      props.name || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : theme.borderColor,
    borderRadius: "0.25rem",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
    display: "flex",
    justifyContent: "center",
    margin: "0.375rem",
    position: "relative",
    transition: "border-color 0.2s ease",
    "&:hover": {
      borderColor: `rgba(${hexToRGB(theme.textColorSecondary)}, 0.25)`,
      cursor: props.isLocked ? "grab" : "pointer",
    },
  }),
  PlayerIconWrapper: (props: IPlayerStylesProps) => ({
    display: "flex",
    flex: props.showNames || !props.isColorBlind ? "0 0 2.25rem" : "1 0 auto",
    alignSelf: "stretch",
    width: props.showNames || !props.isColorBlind ? "2.25rem" : "auto",
    height: "2rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      props.name || !props.showNames
        ? `rgb(${getColorValue(props.color, "base")})`
        : "transparent",

    "&:hover": {
      cursor: props.isLocked ? "grab" : props.showNames ? "pointer" : "grab",
    },
  }),
  PlayerIcon: (props: IPlayerStylesProps) => ({
    width: "2.25rem",
    height: "2rem",
    backgroundImage: "url(assets/images/players.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1800% 240%",
    backgroundPosition: `-${
      (PLAYER_IMAGE[props.color as IPlayerColor].alive.x / 148) * 2.25
    }rem 0px`,
  }),
  PlayerName: (props: IPlayerStylesProps) => ({
    flexGrow: 1,
    flexBasis: "0",
    maxWidth: "100%",
    paddingLeft: "0.5rem",
    fontSize: "1.15rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "0.05rem",
    color:
      props.name !== ""
        ? contrastColor(getColorValue(props.color, "dark"), theme)
        : theme.textColorPrimary,
    opacity: props.isLocked && props.name === "" ? 0.5 : 1,
  }),
  PlayerInput: (props: IPlayerStylesProps) => ({
    color: contrastColor(getColorValue(props.color, "dark"), theme),
    display: "block",
    fontSize: props.isMobile ? "1rem" : props.showNames ? "1.15rem" : "1rem",
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    letterSpacing: "0.05rem",
    lineHeight: 1.25,
    padding: "0.25rem 0",
    textAlign: "left",
    width: "100%",

    "&::placeholder": {
      color: theme.textColorPrimary,
      opacity: 0.5,
    },
  }),
  PlayerHelpText: {
    textAlign: "center",
    fontSize: "0.75rem",
    overflowX: "hidden",
    letterSpacing: "0.05em",
    fontWeight: 500,
    opacity: 0.7,
  },
}));
