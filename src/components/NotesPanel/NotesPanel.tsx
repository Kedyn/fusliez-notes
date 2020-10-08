import Button from "components/common/Button";
import { NAMESPACE } from "utils/constants";
import React from "react";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./NotesPanel.styles";
import { useTranslation } from "react-i18next";

export default function NotesPanel(): JSX.Element {
  const namespace = `${NAMESPACE}notes`;

  const { t } = useTranslation();
  const { isMobile, orientation } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile, orientation });
  const [notes, setNotes] = React.useState(
    localStorage.getItem(namespace) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(namespace, notes);
  }, [notes]);

  return (
    <div className={classes.NotesPanel}>
      {!isMobile && (
        <div className={classes.NotesHeader}>
          <h2>{t("controls.notes")}</h2>
          <Button
            className={classes.NotesReset}
            onClick={() => {
              setNotes("");
            }}
          >
            {t("controls.resetNotes")}
          </Button>
        </div>
      )}
      <div className={classes.Notepad}>
        <textarea
          className={classes.NotepadTextarea}
          name="notes"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNotes(event.target.value);
          }}
          value={notes}
          rows={10}
        />
      </div>
      {isMobile && (
        <Button
          className={classes.NotesReset}
          onClick={() => {
            setNotes("");
          }}
        >
          {t("controls.resetNotes")}
        </Button>
      )}
    </div>
  );
}
