import { createUseStyles } from "react-jss";

export default createUseStyles({
  Maps: {
    padding: "1rem",
    flexGrow: 1,
    maxHeight: "calc((var(--vh, 1vh) * 100) - 2.2rem)",
    fallbacks: {
      maxHeight: "calc(100vh - 2.2rem)",
    },
  },
  MapsCanvas: {
    width: "100%",
    height: "100%",
    overscrollBehavior: "none",
    touchAction: "none",
  },
});
