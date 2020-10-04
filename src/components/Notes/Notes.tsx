import Button from "components/common/Button";
import { NAMESPACE } from "utils/constants";
import React from "react";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./Notes.styles";
import { useTranslation } from "react-i18next";

export default function Notes(): JSX.Element {
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
    <div className={classes.root}>
      {!isMobile && <h2>{t("controls.notes")}</h2>}
      <div className={classes.notesContainer}>
        <textarea
          className={classes.notes}
          name="notes"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNotes(event.target.value);
          }}
          value={notes}
        />
      </div>
      <Button
        classNames={classes.resetNotes}
        onClick={() => {
          setNotes("");
        }}
      >
        {t("controls.resetNotes")}
      </Button>
    </div>
  );
}
