import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  DesktopLayout: {
    flexGrow: 1,
    display: "flex",
  },
  DesktopLayoutLeftContainer: {
    display: "flex",
    transform: "translateX(-45rem)",
    width: 0,
    transition: "200ms ease-in",
  },
  DesktopLayoutLeftContainerShown: {
    transform: "translateX(0)",
    width: "45rem",
  },
  DesktopLayoutLeftContainerHidden: {
    transform: "translateX(-45rem)",
    width: 0,
  },
  DesktopLayoutVerticalDivider: {
    height: "100%",
    borderLeft: `1px solid ${theme.borderColor}`,
  },
  DesktopLayoutHorizontalDivider: {
    width: "100%",
    borderBottom: `1px solid ${theme.borderColor}`,
    margin: 0,
  },
  DesktopLayoutScoresAndSections: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 0",
    width: "22.5rem",
  },
  DesktopLayoutControlsAndNotepad: {
    padding: "1rem 1rem 0",
    width: "22.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  DesktopLayoutRightContainer: {
    flexGrow: 1,
  },
  DesktopLayoutMapButton: {
    width: "1rem",
    padding: "0.25rem",
    borderRadius: "0",
  },
  DesktopLayoutFooter: {
    textAlign: "center",
    fontSize: "smaller",
    padding: "0.5rem",
  },
}));
