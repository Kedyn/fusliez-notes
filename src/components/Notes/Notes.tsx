import React from "react";
import useStyles from "./Notes.styles";
import { namespace } from "context";
import Button from "components/common/Button";

export default function Notes(): JSX.Element {
  const classes = useStyles();
  const [notes, setNotes] = React.useState("");

  // load notes if it is in localStorage
  React.useEffect(() => {
    const localNotes = localStorage.getItem(`${namespace}notes`);
    console.log(localNotes);
    if (localNotes) {
      setNotes(localNotes);
    }

    window.addEventListener("onbeforeunload", saveData);

    return () => {
      window.removeEventListener("onbeforeunload", saveData);
    };
  }, []);

  // data will be saved
  // when the page loses focus on the textarea
  // or when the user leaves the page
  // however, if they do it too soon after the last entry
  // the notes won't be saved properly (a few chars off)
  function saveData(notes) {
    localStorage.setItem(`${namespace}notes`, notes);
  }

  return (
    <div className={classes.root}>
      <h2>Notes</h2>
      <div className={classes.notesContainer}>
        <textarea
          className={classes.notes}
          name="notes"
          onBlur={() => saveData(notes)}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNotes(event.target.value);
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
