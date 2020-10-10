import Button from "components/common/Button";
import NotesPanel from "components/NotesPanel";
import React from "react";
import ScoreControls from "components/ScoreControls";
import Settings from "components/Settings";
import About from "components/About";
import Changelog from "components/Changelog";
import useStyles from "./ControlsContent.styles";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function ControlsContent(): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();

  const [showChangelog, setShowChangelog] = React.useState<boolean>(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState<boolean>(false);

  return (
    <div id="controls" className={classes.ControlsContent}>
      <div className={classes.ControlsContentHeader}>
        <Button onClick={() => setShowSettings(true)}>
          <FontAwesomeIcon icon={faCog} /> {t("menu.settings")}
        </Button>{" "}
        <Button onClick={() => setShowAbout(true)}>{t("menu.about")}</Button>{" "}
        <Button onClick={() => setShowChangelog(true)}>
          {t("menu.changelog")}
        </Button>
      </div>
      <ScoreControls />
      <hr className={classes.Divider} />

      <NotesPanel />
      <Settings show={showSettings} onClose={() => setShowSettings(false)} />

      <Changelog show={showChangelog} onClose={() => setShowChangelog(false)} />

      <About show={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}
