import { createUseStyles } from "react-jss";

export default createUseStyles({
  Maps: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
    height: "100%",
  },
  MapsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  MapsTitle: {
    fontSize: "1.25rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    marginRight: "1rem",
    flex: "1 0 auto",
  },
  MapsContainer: {
    flex: 1,
  },
});
