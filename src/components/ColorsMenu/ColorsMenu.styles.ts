import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";
import colorNameToRGB from "utils/colorConverter";

export const useColorSwatchStyles = createUseStyles({
  playerColorChangeMenuIcon: (props) => ({
    display: "block",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    flex: "1 1 calc(25% - 10px)",
    backgroundColor: props.targetColor,
    margin: "0.15rem",

    "&:hover": {
      backgroundColor: `rgba(${colorNameToRGB(props.targetColor)}, 0.5)`,
      cursor: "pointer",
    },
  }),
});

export default createUseStyles((theme: ITheme) => ({
  root: {},
  playerColorChangeMenu: {
    alignItems: "center",
    background: theme.backgroundColor,
    border: "0.0625rem solid rgba(240, 240, 240, 0.25)",
    borderRadius: "6px",
    boxShadow: "0 0 1rem rgba(240, 240, 240, 0.1)",
    bottom: "110%",
    display: "flex",
    flex: 4,
    flexWrap: "wrap",
    left: 0,
    justifyContent: "space-between",
    position: "absolute",
    padding: "0.25rem",
    width: "100%",
    zIndex: 10,
  },
  playerColorChangeMenuHidden: {
    display: "none",
  },
}));
