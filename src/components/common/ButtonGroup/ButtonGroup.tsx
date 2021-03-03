import React from "react";
import useStyles from "./ButtonGroup.styles";

export interface IButtonGroupProps {
  children: React.ReactNode;
  inline: boolean;
}

export default function ButtonGroup(props: IButtonGroupProps): JSX.Element {
  const { children, inline } = props;
  const classes = useStyles({ inline });

  return <div className={classes.ButtonGroup}>{children}</div>;
}
