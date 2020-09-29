import React from "react";
import useStyles from "./SettingsContent.styles";

import { useData } from "context";
import Switch from "../Switch";

export default function SettingsContent(): JSX.Element {
  const classes = useStyles();
  const { names, setNames } = useData()!; // eslint-disable-line

  return (
    <div className={classes.container}>
      <Switch
        label="Use player names"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNames(event.currentTarget.checked);
        }}
        checked={names}
      />
    </div>
  );
}
