import Button from "components/common/Button";
import ButtonGroup from "components/common/ButtonGroup";
import { IView } from "utils/types/interface";
import InterfaceSettings from "components/InterfaceSettings";
import PlayersSettings from "components/PlayersSettings";
import React from "react";
import SectionsSettings from "components/SectionsSettings";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./Settings.styles";
import { useTranslation } from "react-i18next";

export default function Settings(): JSX.Element {
  const isMobile = useSelector(getIsMobile);

  const { t } = useTranslation();

  const classes = useStyles({ isMobile });

  const views: Array<IView> = [
    {
      title: t("settings.playersTab"),
      content: <PlayersSettings />,
      minor: false,
    },
    {
      title: t("settings.sectionsTab"),
      content: <SectionsSettings />,
      minor: false,
    },
    {
      title: t("settings.interfaceTab"),
      content: <InterfaceSettings />,
      minor: false,
    },
  ];

  const [currentContent, setCurrentContent] = React.useState(0);

  return (
    <div className={classes.Settings}>
      {isMobile && (
        <h2 className={classes.SettingsTitle}>{t("settings.title")}</h2>
      )}

      <div className={classes.SettingsTabs}>
        <ButtonGroup inline={false}>
          {views.map((view, index) => (
            <Button
              key={index}
              pressed={currentContent === index}
              onClick={() => setCurrentContent(index)}
            >
              {view.title}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className={classes.SettingsContent}>
        {views[currentContent].content}
      </div>
    </div>
  );
}
