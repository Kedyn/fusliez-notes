import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { VERSION } from "constants/main";
import useStyles from "./ElectronTitlebar.styles";

export default function ElectronTitlebar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.ElectronTitlebar}>
      <img
        src="assets/images/app/favicon.ico"
        className={classes.ElectronTitlebarFavIcon}
      />

      <div className={classes.ElectronTitlebarTitle}>
        fusliez notes v{VERSION}
      </div>

      <Button
        className={classes.ElectronTitlebarCloseButton}
        onClick={() => window.Electron.ipcRenderer.send("quit")}
      >
        <FontAwesomeIcon icon="times" />
      </Button>
    </div>
  );
}
