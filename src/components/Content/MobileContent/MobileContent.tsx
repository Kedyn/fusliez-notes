import AboutContent from "components/About/AboutContent";
import FeedbackContent from "components/Feedback/FeedbackContent";
import { IView } from "utils/types";
import MainContent from "components/MainContent";
import MapsContent from "components/MapsContent";
import Notes from "components/Notes";
import React from "react";
import Scores from "components/Scores";
import ScoresPanel from "components/ScoresPanel";
import SettingsContent from "components/common/Settings/SettingsContent";
import SlideDrawer from "components/SlideDrawer";
import TabNavigator from "components/TabNavigator";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./MobileContent.styles";
import { useTranslation } from "react-i18next";

export default function MobileContent(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile, orientation } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile, orientation });

  const views: Array<IView> = [
    {
      title: t("menu.players"),
      content: <MainContent />,
    },
    {
      title: t("menu.notes"),
      content: <Notes />,
    },
    {
      title: t("menu.scores"),
      content: (
        <div className={classes.recordContainer}>
          <Scores />
          <ScoresPanel />
        </div>
      ),
    },
    {
      title: t("menu.maps"),
      content: <MapsContent />,
    },
    {
      title: t("menu.settings"),
      content: <SettingsContent />,
    },
    {
      title: t("menu.feedback"),
      content: <FeedbackContent />,
    },
    {
      title: t("menu.about"),
      content: <AboutContent />,
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
    <div className={classes.root}>
      <div className={classes.content}>
        <SlideDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          views={views}
          setActiveView={setActiveView}
        />

        {activeView.content}
      </div>

      <TabNavigator
        activeView={activeView.title}
        onChangeActiveView={handleChangeActiveView}
        setIsDrawerOpen={setIsDrawerOpen}
        orientation={orientation}
      />
    </div>
  );
}
