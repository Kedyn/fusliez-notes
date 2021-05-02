import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import cx from "classnames";
import useStyles from "./NavbarItem.styles";

export interface INavbarItemProps {
  name: string;
  icon: IconProp;
  active: boolean;
  onClick(): void;
}

export default function NavbarItem(props: INavbarItemProps): JSX.Element {
  const classes = useStyles();
  const { name, icon, active, onClick } = props;

  return (
    <div
      className={cx(classes.NavbarItem, {
        [classes.NavbarItemIsActive]: active,
      })}
      aria-label={`navitem-${name}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />

      <span className={classes.NavbarItemLabel}>{name}</span>
    </div>
  );
}
