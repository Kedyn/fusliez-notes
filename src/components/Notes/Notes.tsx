import React from "react";
import useStyles from "./Notes.styles";
import { namespace } from "context";
import Button from "components/common/Button";

export default function Notes({
  isMobile,
  orientation,
}: {
  isMobile: boolean;
  orientation: string;
}): JSX.Element {
  const classes = useStyles({ isMobile, orientation });
  const [notes, setNotes] = React.useState("");

  // load notes if it is in localStorage
  React.useEffect(() => {
    const localNotes = localStorage.getItem(`${namespace}notes`);
    if (localNotes) {
      setNotes(localNotes);
    }
  }, []);

  // data will be saved
  // when the page loses focus on the textarea
  // or when the user leaves the page
  // however, if they do it too soon after the last entry
  // the notes won't be saved properly (a few chars off)
  function saveData(notes: string) {
    localStorage.setItem(`${namespace}notes`, notes);
  }

  return (
    <div className={classes.root}>
      {!isMobile && <h2>Notes</h2>}
      <div className={classes.notesContainer}>
        <textarea
          className={classes.notes}
          name="notes"
          onBlur={() => saveData(notes)}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNotes(event.target.value);
            // calling the save function on change because
            // there seems to be some delay
            // this ensures all data is saved properly
            // tried to test it and doesn't show any performance impact
            saveData(event.target.value);
          }}
          value={notes}
        />
      </div>
      <Button
        classNames={classes.resetNotes}
        onClick={() => {
          setNotes("");
          saveData("");
        }}
      >
        Reset Notes
      </Button>
    </div>
  );
}

Notes.defaultProps = {
  isMobile: false,
  orientation: "portrait",
};
