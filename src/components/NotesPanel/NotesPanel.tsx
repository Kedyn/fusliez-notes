import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";

import Button from "components/common/Button";
import { NAMESPACE } from "constants/main";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./NotesPanel.styles";
import { useTranslation } from "react-i18next";

export default function NotesPanel(): JSX.Element {
  const namespace = `${NAMESPACE}notes`;

  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

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
      <textarea
        className={classes.Notepad}
        name="notes"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNotes(event.target.value);
        }}
        value={notes}
      />
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
