import { createUseStyles } from "react-jss";

export default createUseStyles({
  EmergencyButtonUsageContainer: {
    position: "relative",
    width: "2rem",
    height: "2rem",
    margin: "0.25rem 0.25rem",
  },
  EmergencyButtonUsage: {
    position: "absolute",
    cursor: "pointer",
    background:
      "repeating-linear-gradient(135deg, black, black 2px, yellow 2px, yellow 4px)",
    width: "2rem",
    height: "2rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  isAlive: {
    "&:hover": {
      filter: "brightness(200%) drop-shadow(0 0 0.5rem white)",
    },
  },
  isDead: {
    filter: "opacity(10%)",
  },
  EmergencyButtonUsagePedestal: {
    background: "white",
    border: "solid 1px black",
    width: "1.75rem",
    height: "1.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  EmergencyButtonUsageButton: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    border: "solid 1px black",
  },
  UsedEmergencyButtonCross: {
    position: "absolute",
    width: "2rem",
    height: "2rem",
  },
  UsedEmergencyButtonCrossLine1: {
    transform: "translate(0, 0.875rem) rotate(-45deg)",
    backgroundColor: "red",
    marginLeft: 0,
    width: "2rem",
    height: "0.25rem",
  },
  UsedEmergencyButtonCrossLine2: {
    transform: "translate(0, 0.625rem) rotate(45deg)",
    backgroundColor: "red",
    marginLeft: 0,
    width: "2rem",
    height: "0.25rem",
  },
});
