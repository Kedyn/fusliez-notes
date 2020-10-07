import Button from "components/common/Button";
import NotesPanel from "../NotesPanel";
import React from "react";
import ScoreControls from "../ScoreControls";
import Settings from "components/common/Settings";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div id="controls" className={classes.ControlsContent}>
      <ScoreControls />

      <NotesPanel />

      <Button
        classNames={`${classes.dangerButton}`}
        onClick={() => setShowSettings(true)}
      >
        {t("controls.settings")}
      </Button>

      <Settings show={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}
