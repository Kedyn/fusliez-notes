import { FaMap, FaRegStickyNote, FaStickyNote } from "react-icons/fa";

import { BiDoughnutChart } from "react-icons/bi";
import { FiMap } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { RiDonutChartFill } from "react-icons/ri";
import useStyles from "./TabNavigator.styles";
import { useTranslation } from "react-i18next";

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
      icon: (
        <img
          src="assets/Players.png"
          alt="player-icon"
          className={classes.icon}
        />
      ),
      iconSelected: (
        <img
          src="assets/Players-selected.png"
          alt="player-selected-icon"
          className={classes.icon}
        />
      ),
    },
    {
      name: t("menu.notes"),
      icon: <FaRegStickyNote className={classes.icon} />,
      iconSelected: <FaStickyNote className={classes.icon} />,
    },
    {
      name: t("menu.scores"),
      icon: <BiDoughnutChart className={classes.icon} />,
      iconSelected: <RiDonutChartFill className={classes.icon} />,
    },
    {
      name: t("menu.maps"),
      icon: <FiMap className={classes.icon} />,
      iconSelected: <FaMap className={classes.icon} />,
    },
    {
      name: t("menu.menu"),
      icon: <GiHamburgerMenu className={classes.icon} />,
      iconSelected: <GiHamburgerMenu className={classes.icon} />,
    },
  ];

  function Tab({
    name,
    icon,
    iconSelected,
  }: {
    name: string;
    icon: JSX.Element;
    iconSelected: JSX.Element;
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
        {activeView === name ? iconSelected : icon}
        {name}
      </button>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        {tabs.map(({ name, icon, iconSelected }) => (
          <Tab key={name} name={name} icon={icon} iconSelected={iconSelected} />
        ))}
      </div>
    </div>
  );
}
