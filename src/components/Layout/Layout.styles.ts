import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  "@global": {
    body: {
      backgroundColor: theme.backgroundColorPrimary,
      color: theme.textColorPrimary,
      fontFamily: theme.fontFamily,
      fontSize: theme.baseFontSize,
    },
    input: {
      color: theme.textColorPrimary,
      fontFamily: theme.fontFamily,
    },
    textarea: {
      backgroundColor: theme.backgroundColorSecondary,
      color: theme.textColorPrimary,
      border: `1px solid ${theme.borderColor}`,
    },
    a: {
      color: theme.linkColor,
    },
  },
}));
