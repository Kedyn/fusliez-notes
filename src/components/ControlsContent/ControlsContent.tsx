import Button from "components/common/Button";
import React from "react";
import Settings from "components/common/Settings";
import useStyles from "./ControlsContent.styles";
import ScoresPanel from "../ScoresPanel";
import Notes from "../Notes";

export default function ControlsContent(): JSX.Element {
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);
  // const { notes, setNotes } = useData()!; // eslint-disable-line

  // const debounce = (func: Function, wait: number) => {
  //   let timeout: ReturnType<typeof setTimeout>;

  //   return function executedFunction(...args) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(...args);
  //     };

  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };

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
