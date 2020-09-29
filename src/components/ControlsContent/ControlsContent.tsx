import Button from "components/common/Button";
import React from "react";
import Settings from "components/common/Settings";
import useStyles from "./ControlsContent.styles";
import ScoresPanel from "../ScoresPanel";
import Notes from "../Notes";

export default function ControlsContent(): JSX.Element {
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div id="controls" className={classes.root}>
      <ScoresPanel />

      <Notes />

      <Button
        classNames={`${classes.dangerButton}`}
        onClick={() => setShowSettings(true)}
      >
        Settings
      </Button>

      <Settings show={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}
