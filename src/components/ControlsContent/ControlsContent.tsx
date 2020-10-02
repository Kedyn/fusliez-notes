import Button from "components/common/Button";
import Notes from "../Notes";
import React from "react";
import ScoresPanel from "../ScoresPanel";
import Settings from "components/common/Settings";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div id="controls" className={classes.root}>
      <ScoresPanel />

      <Notes />

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
