import React from "react";
import useStyles from "./TabNavigator.styles";
import { FaStickyNote, FaRegStickyNote, FaMap } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { BiDoughnutChart } from "react-icons/bi";
import { RiDonutChartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function TabNavigator({
  currentTab,
  setCurrentTab,
  setIsDrawerOpen,
  orientation,
  children,
}: {
  currentTab: string;
  setCurrentTab: (text: string) => void;
  setIsDrawerOpen: (state: boolean) => void;
  orientation: string;
  children: JSX.Element;
}): JSX.Element {
  const classes = useStyles({ orientation });

  const tabs = [
    {
      name: "Menu",
      icon: <GiHamburgerMenu className={classes.icon} />,
      iconSelected: <GiHamburgerMenu className={classes.icon} />,
    },
    {
      name: "Players",
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
      name: "Notes",
      icon: <FaRegStickyNote className={classes.icon} />,
      iconSelected: <FaStickyNote className={classes.icon} />,
    },
    {
      name: "Record",
      icon: <BiDoughnutChart className={classes.icon} />,
      iconSelected: <RiDonutChartFill className={classes.icon} />,
    },
    {
      name: "Maps",
      icon: <FiMap className={classes.icon} />,
      iconSelected: <FaMap className={classes.icon} />,
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
        className={`${classes.tab} ${name === currentTab && classes.activeTab}`}
        onClick={() =>
          name === "Menu" ? setIsDrawerOpen(true) : setCurrentTab(name)
        }
      >
        {currentTab === name ? iconSelected : icon}
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

      {children}
    </div>
  );
}
