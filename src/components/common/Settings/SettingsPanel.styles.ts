import { createUseStyles } from "react-jss";

export default createUseStyles({
  SettingsPanel: (props) => ({
    padding: props.isMobile ? "1rem" : "0",
  }),
  SettingsContent: {
    paddingLeft: "1rem",
  },
});
