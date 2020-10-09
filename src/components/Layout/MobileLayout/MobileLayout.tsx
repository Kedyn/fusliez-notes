import AboutContent from "components/About/AboutPanel";
import FeedbackContent from "components/Feedback/FeedbackContent";
import { IView } from "utils/types";
import MainContent from "components/MainContent";
import MapsPanel from "components/MapsPanel";
import NotesPanel from "components/NotesPanel";
import React from "react";
import ScoresPanel from "components/ScoresPanel";
import ScoreControls from "components/ScoreControls";
import SettingsPanel from "components/common/Settings/SettingsPanel";
import SlideDrawer from "components/SlideDrawer";
import Navbar from "components/Navbar";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./MobileLayout.styles";
import { useTranslation } from "react-i18next";
import ChangelogPanel from "components/Changelog/ChangelogPanel";

export default function MobileLayout(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile, orientation } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile, orientation });

  const views: Array<IView> = [
    {
      title: t("menu.players"),
      content: <MainContent />,
      minor: false,
    },
    {
      title: t("menu.notes"),
      content: <NotesPanel />,
      minor: false,
    },
    {
      title: t("menu.scores"),
      content: (
        <div className={classes.MobileScoresContent}>
          <ScoresPanel />
          <ScoreControls />
        </div>
      ),
      minor: false,
    },
    {
      title: t("menu.maps"),
      content: <MapsPanel />,
      minor: false,
    },
    {
      title: t("menu.settings"),
      content: <SettingsPanel />,
      minor: true,
    },
    {
      title: t("menu.about"),
      content: <AboutContent />,
      minor: true,
    },
    {
      title: t("menu.changelog"),
      content: <ChangelogPanel />,
      minor: true,
    },
    {
      title: t("menu.feedback"),
      content: <FeedbackContent />,
      minor: true,
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [activeView, setActiveView] = React.useState<IView>(views[0]);

  const handleChangeActiveView = (view: string) => {
    let newActiveView: IView;

    switch (view) {
      case t("menu.players"):
        newActiveView = views[0];
        break;
      case t("menu.notes"):
        newActiveView = views[1];
        break;
      case t("menu.scores"):
        newActiveView = views[2];
        break;
      case t("menu.maps"):
        newActiveView = views[3];
        break;
      default:
        newActiveView = views[0];
    }

    setActiveView(newActiveView);
  };

  return (
    <div className={classes.MobileLayout}>
      <div className={classes.MobileContent}>
        <SlideDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          views={views}
          setActiveView={setActiveView}
        />

        {activeView.content}
      </div>

      <Navbar
        activeView={activeView.title}
        onChangeActiveView={handleChangeActiveView}
        setIsDrawerOpen={setIsDrawerOpen}
        orientation={orientation}
      />
    </div>
  );
}
