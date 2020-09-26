import Button from "components/common/Button";
import React from "react";
import Settings from "components/common/Settings";
import { useData } from "context";
import useStyles from "./ControlsContent.styles";
import ScoresPanel from "../ScoresPanel";

export default function ControlsContent(): JSX.Element {
  const classes = useStyles();
  const [showSettings, setShowSettings] = React.useState(false);
  const { notes, setNotes } = useData()!; // eslint-disable-line

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
      <h2>Notes</h2>
      <div className={classes.notesContainer}>
        <textarea
          className={classes.notes}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNotes(event.currentTarget.value)
          }
          value={notes}
        />
      </div>
      <Button classNames={`${classes.resetNotes}`} onClick={() => setNotes("")}>
        Reset Notes
      </Button>
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
