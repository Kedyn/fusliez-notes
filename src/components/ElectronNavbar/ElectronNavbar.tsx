import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import NavbarItem from "components/common/NavbarItem";
import React from "react";
import useStyles from "./ElectronNavbar.styles";
import { useTranslation } from "react-i18next";

export interface IElectronNavbarProps {
  activeView: string;
  onChangeActiveView: (view: string) => void;
}

export default function ElectronNavbar(
  props: IElectronNavbarProps
): JSX.Element {
  const { t } = useTranslation();

  const { activeView, onChangeActiveView } = props;

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
      name: t("menu.settings"),
      icon: "cog",
    },
    {
      name: t("menu.changelog"),
      icon: "info-circle",
    },
    {
      name: t("menu.about"),
      icon: "heart",
    },
  ];

  return (
    <div className={classes.ElectronNavbar}>
      <div className={classes.ElectronNavbarContainer}>
        {tabs.map(({ name, icon }) => (
          <NavbarItem
            key={name}
            name={name}
            icon={icon as IconProp}
            active={name === activeView}
            onClick={() => onChangeActiveView(name)}
          />
        ))}
      </div>
    </div>
  );
}
