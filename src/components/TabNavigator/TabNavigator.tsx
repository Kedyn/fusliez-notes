import React from "react";
import { useTranslation } from "react-i18next";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faEdit,
  faCompactDisc,
  faMap,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import useStyles from "./TabNavigator.styles";

export interface ITabNavigator {
  activeView: string;
  onChangeActiveView: (view: string) => void;
  setIsDrawerOpen: (state: boolean) => void;
  orientation: string;
}

export default function TabNavigator(props: ITabNavigator): JSX.Element {
  const { t } = useTranslation();
  const {
    activeView,
    onChangeActiveView,
    setIsDrawerOpen,
    orientation,
  } = props;
  const classes = useStyles({ orientation });

  const tabs = [
    {
      name: t("menu.players"),
      icon: faUserAstronaut,
    },
    {
      name: t("menu.notes"),
      icon: faEdit,
    },
    {
      name: t("menu.scores"),
      icon: faCompactDisc,
    },
    {
      name: t("menu.maps"),
      icon: faMap,
    },
    {
      name: t("menu.menu"),
      icon: faEllipsisH,
    },
  ];

  function Tab({
    name,
    icon,
  }: {
    name: string;
    icon: IconDefinition;
  }): JSX.Element {
    return (
      <button
        className={`${classes.tab} ${name === activeView && classes.activeTab}`}
        onClick={() =>
          name === t("menu.menu")
            ? setIsDrawerOpen(true)
            : onChangeActiveView(name)
        }
        disabled={name === activeView}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
        <span className={classes.label}>{name}</span>
      </button>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        {tabs.map(({ name, icon }) => (
          <Tab key={name} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}
