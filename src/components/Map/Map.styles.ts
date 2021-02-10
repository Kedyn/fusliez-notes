import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Map: {
    width: "100%",
    height: "100%",
    maxHeight: "calc((var(--vh, 1vh) * 100) - 9rem)",
    fallbacks: {
      maxHeight: "calc(100vh - 9rem)",
    },
  },
  MapImage: {
    display: "none",
  },
}));
