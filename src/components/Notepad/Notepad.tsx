import { getIsMobile, getOrientation } from "store/slices/DeviceSlice";

import Button from "components/common/Button";
import { NAMESPACE } from "constants/main";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./Notepad.styles";
import { useTranslation } from "react-i18next";

export default function Notepad(): JSX.Element {
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
    <div className={classes.Notepad}>
      {!isMobile && (
        <div className={classes.NotepadHeader}>
          <h2>{t("controls.notes")}</h2>
          <Button
            className={classes.NotepadReset}
            onClick={() => {
              setNotes("");
            }}
          >
            {t("controls.resetNotes")}
          </Button>
        </div>
      )}

      <textarea
        className={classes.NotepadEditor}
        name="notes"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNotes(event.target.value);
        }}
        value={notes}
      />

      {isMobile && (
        <Button
          className={classes.NotepadReset}
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
