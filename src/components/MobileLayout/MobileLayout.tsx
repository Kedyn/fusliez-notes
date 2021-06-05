import { NAMESPACE, VERSION } from "constants/main";
import React, { Suspense } from "react";

import { IView } from "utils/types/interface";
import Navbar from "components/Navbar";
import useStyles from "./MobileLayout.styles";
import { useTranslation } from "react-i18next";

const SlideDrawer = React.lazy(
  () => import(/* webpackChunkName: "slidedrawer" */ "components/SlideDrawer")
);
const EmergencyButtonUsages = React.lazy(
  () =>
    import(
      /* webpackChunkName: "emergencyButtonUsages" */ "components/EmergencyButtonUsages"
    )
);
const Sections = React.lazy(
  () => import(/* webpackChunkName: "sections" */ "components/Sections")
);
const Notepad = React.lazy(
  () => import(/* webpackChunkName: "notepad" */ "components/Notepad")
);
const ScoresPanel = React.lazy(
  () => import(/* webpackChunkName: "scores" */ "components/ScoresPanel")
);
const MainControls = React.lazy(
  () => import(/* webpackChunkName: "maincontrols" */ "components/MainControls")
);
const Maps = React.lazy(
  () => import(/* webpackChunkName: "maps" */ "components/Maps")
);
const Settings = React.lazy(
  () => import(/* webpackChunkName: "settings" */ "components/Settings")
);
const About = React.lazy(
  () => import(/* webpackChunkName: "about" */ "components/About")
);
const Changelog = React.lazy(
  () => import(/* webpackChunkName: "changelog" */ "components/Changelog")
);

export default function MobileLayout(): JSX.Element {
  const classes = useStyles();

  const { t } = useTranslation();

  const views: Array<IView> = [
    {
      title: t("menu.players"),
      content: (
        <div>
          <EmergencyButtonUsages />
          <Sections />
        </div>
      ),
      minor: false,
    },
    {
      title: t("menu.notes"),
      content: <Notepad />,
      minor: false,
    },
    {
      title: t("menu.scores"),
      content: (
        <div className={classes.MobileLayoutScoresContent}>
          <ScoresPanel />
          <MainControls />
        </div>
      ),
      minor: false,
    },
    {
      title: t("menu.maps"),
      content: <Maps />,
      minor: false,
    },
    {
      title: t("menu.settings"),
      content: <Settings />,
      minor: true,
    },
    {
      title: t("menu.about"),
      content: <About />,
      minor: true,
    },
    {
      title: t("menu.changelog"),
      content: <Changelog />,
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

  React.useEffect(() => {
    const version = localStorage.getItem(`${NAMESPACE}version`);

    if (version === null || version !== VERSION) {
      setActiveView(views[6]);
    }

    localStorage.setItem(`${NAMESPACE}version`, VERSION);
  }, []);

  return (
    <div className={classes.MobileLayout}>
      <div className={classes.MobileLayoutContent}>
        <Suspense fallback="loading...">
          <SlideDrawer
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
            views={views}
            setActiveView={setActiveView}
          />
        </Suspense>

        {activeView.content}
      </div>

      <Navbar
        activeView={activeView.title}
        onChangeActiveView={handleChangeActiveView}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </div>
  );
}
