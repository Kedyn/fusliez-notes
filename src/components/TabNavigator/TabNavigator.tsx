import React from "react";
import useStyles from "./TabNavigator.styles";

export default function TabNavigator({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: (text: string) => void;
}): JSX.Element {
  const classes = useStyles();

  const tabs = ["Players", "Notes", "Record", "Maps"];

  function Tab({ name }: { name: string }): JSX.Element {
    console.log(name, currentTab);
    return (
      <button
        className={`${classes.tab} ${name === currentTab && classes.activeTab}`}
        onClick={() => setCurrentTab(name)}
      >
        <img
          src={`assets/${name}.png`}
          alt={`${name}-icon`}
          className={classes.icon}
        />
        {name}
      </button>
    );
  }

  return (
    <div className={classes.root}>
      {tabs.map((tab) => (
        <Tab key={tab} name={tab} />
      ))}
    </div>
  );
}
