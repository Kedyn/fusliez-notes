import { NAMESPACE, VERSION } from "constants/main";

import About from "components/About";
import Changelog from "components/Changelog";
import ElectronNavbar from "components/ElectronNavbar";
import ElectronTitlebar from "components/ElectronTitlebar";
import { IView } from "utils/types/interface";
import MainControls from "components/MainControls";
import Maps from "components/Maps";
import Notepad from "components/Notepad";
import React from "react";
import ScoresPanel from "components/ScoresPanel";
import Sections from "components/Sections";
import Settings from "components/Settings";
import { setIsMobile } from "store/slices/DeviceSlice";
import { useDispatch } from "react-redux";
import useStyles from "./ElectronLayout.styles";
import { useTranslation } from "react-i18next";

export default function ElectronLayout(): JSX.Element {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const views: Array<IView> = [
    {
      title: t("menu.players"),
      content: <Sections />, // fixme: add EmergencyButtonUsages
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
        <div className={classes.ElectronLayoutScoresContent}>
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
      title: t("menu.changelog"),
      content: <Changelog />,
      minor: true,
    },
    {
      title: t("menu.about"),
      content: <About />,
      minor: true,
    },
  ];

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
      case t("menu.settings"):
        newActiveView = views[4];
        break;
      case t("menu.changelog"):
        newActiveView = views[5];
        break;
      case t("menu.about"):
        newActiveView = views[6];
        break;
      default:
        newActiveView = views[0];
    }

    setActiveView(newActiveView);
  };

  React.useEffect(() => {
    dispatch(setIsMobile(true));

    const version = localStorage.getItem(`${NAMESPACE}version`);

    if (version === null || version !== VERSION) {
      setActiveView(views[6]);
    }

    localStorage.setItem(`${NAMESPACE}version`, VERSION);
  }, []);

  return (
    <div
      className={classes.ElectronLayout}
      onPointerEnter={() => {
        window.Electron.ipcRenderer.send("listen");
      }}
      onPointerLeave={() => {
        window.Electron.ipcRenderer.send("ignore");
      }}
    >
      <ElectronTitlebar />

      <div className={classes.ElectronLayoutContent}>{activeView.content}</div>

      <ElectronNavbar
        activeView={activeView.title}
        onChangeActiveView={handleChangeActiveView}
      />
    </div>
  );
}
