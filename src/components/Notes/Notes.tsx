import React from "react";
import useStyles from "./Notes.styles";

// export interface INotesProps {}

export default function Notes(): JSX.Element {
  const classes = useStyles();
  const [notes, setNotes] = React.useState("");

  return (
    <div className={classes.root}>
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
    </div>
  );
}
