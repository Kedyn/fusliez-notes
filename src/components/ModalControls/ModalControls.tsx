import { NAMESPACE, VERSION } from "constants/main";
import React, { Suspense } from "react";

import Button from "components/common/Button";
import Modal from "components/common/Modal";
import useStyles from "./ModalControls.styles";
import { useTranslation } from "react-i18next";

const Settings = React.lazy(
  () => import(/* webpackChunkName: "settings" */ "components/Settings")
);
const About = React.lazy(
  () => import(/* webpackChunkName: "about" */ "components/About")
);
const Changelog = React.lazy(
  () => import(/* webpackChunkName: "changelog" */ "components/Changelog")
);

export default function ModalControls(): JSX.Element {
  const { t } = useTranslation();

  const classes = useStyles();

  const [showChangelog, setShowChangelog] = React.useState<boolean>(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState<boolean>(false);

  React.useEffect(() => {
    const version = localStorage.getItem(`${NAMESPACE}version`);

    if (version === null || version !== VERSION) {
      setShowChangelog(true);
    }

    localStorage.setItem(`${NAMESPACE}version`, VERSION);
  }, []);

  return (
    <>
      <div className={classes.ModalControls}>
        <Button
          className={classes.ModalControlsButton}
          onClick={() => setShowSettings(true)}
        >
          {t("menu.settings")}
        </Button>

        <Button
          className={classes.ModalControlsButton}
          onClick={() => setShowAbout(true)}
        >
          {t("menu.about")}
        </Button>

        <Button
          className={classes.ModalControlsButton}
          onClick={() => setShowChangelog(true)}
        >
          {t("menu.changelog")}
        </Button>
      </div>

      <Suspense fallback="loading...">
        <Modal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          title={t("settings.title")}
        >
          <Settings />
        </Modal>

        <Modal
          show={showChangelog}
          onClose={() => setShowChangelog(false)}
          title={`fusliez notes v${VERSION}`}
        >
          <Changelog />
        </Modal>

        <Modal
          show={showAbout}
          onClose={() => setShowAbout(false)}
          title={t("about.title")}
        >
          <About />
        </Modal>
      </Suspense>
    </>
  );
}
