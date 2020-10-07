import Button from "components/common/Button";
import NotesPanel from "../NotesPanel";
import React from "react";
import ScoreControls from "../ScoreControls";
import Settings from "components/common/Settings";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div id="controls" className={classes.ControlsContent}>
      <Button onClick={() => setShowSettings(true)}>
        <FontAwesomeIcon icon={faCog} /> {t("controls.settings")}
      </Button>
      <ScoreControls />
      <hr className={classes.Divider} />

      <NotesPanel />
      <Settings show={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}
