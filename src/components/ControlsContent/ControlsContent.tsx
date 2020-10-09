import Button from "components/common/Button";
import NotesPanel from "../NotesPanel";
import React from "react";
import ScoreControls from "../ScoreControls";
import Settings from "components/common/Settings";
import About from "components/About";
import VersionNotes from "components/Changelog";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  const [showVersionNotes, setShowVersionNotes] = React.useState<boolean>(
    false
  );
  const [showSettings, setShowSettings] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState<boolean>(false);

  return (
    <div id="controls" className={classes.ControlsContent}>
      <div className={classes.ControlsContentHeader}>
        <Button onClick={() => setShowSettings(true)}>
          <FontAwesomeIcon icon={faCog} /> {t("menu.settings")}
        </Button>{" "}
        <Button onClick={() => setShowAbout(true)}>{t("menu.about")}</Button>{" "}
        <Button onClick={() => setShowVersionNotes(true)}>
          {t("menu.changelog")}
        </Button>
      </div>
      <ScoreControls />
      <hr className={classes.Divider} />

      <NotesPanel />
      <Settings show={showSettings} onClose={() => setShowSettings(false)} />

      <VersionNotes
        show={showVersionNotes}
        onClose={() => setShowVersionNotes(false)}
      />

      <About show={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}
