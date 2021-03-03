import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import useStyles from "./Navbar.styles";
import { useTranslation } from "react-i18next";

export interface INavbar {
  activeView: string;
  onChangeActiveView: (view: string) => void;
  setIsDrawerOpen: (state: boolean) => void;
}

export default function Navbar(props: INavbar): JSX.Element {
  const { t } = useTranslation();

  const { activeView, onChangeActiveView, setIsDrawerOpen } = props;

  const classes = useStyles();

  const tabs = [
    {
      name: t("menu.players"),
      icon: "user-astronaut",
    },
    {
      name: t("menu.notes"),
      icon: "edit",
    },
    {
      name: t("menu.scores"),
      icon: "compact-disc",
    },
    {
      name: t("menu.maps"),
      icon: "map",
    },
    {
      name: t("menu.menu"),
      icon: "ellipsis-h",
    },
  ];

  function NavbarItem({
    name,
    icon,
  }: {
    name: string;
    icon: IconProp;
  }): JSX.Element {
    return (
      <button
        className={`${classes.NavbarItem} ${
          name === activeView && classes.isActive
        }`}
        onClick={() =>
          name === t("menu.menu")
            ? setIsDrawerOpen(true)
            : onChangeActiveView(name)
        }
        disabled={name === activeView}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
        <span className={classes.NavbarItemLabel}>{name}</span>
      </button>
    );
  }

  return (
    <div className={classes.Navbar}>
      <div className={classes.NavbarContainer}>
        {tabs.map(({ name, icon }) => (
          <NavbarItem key={name} name={name} icon={icon as IconProp} />
        ))}
      </div>
    </div>
  );
}
