import Button from "components/common/Button";
import Modal from "components/common/Modal";
import React from "react";
import { useData } from "context";
import useStyles from "./Recovery.styles";
import { useTranslation } from "react-i18next";

export default function Recovery(): JSX.Element {
  const [showRecover, setShowRecover] = React.useState(false);
  const [oldNotes, setOldNotes] = React.useState("");
  const classes = useStyles();
  const { t } = useTranslation();
  const { notes, setNotes } = useData()!; // eslint-disable-line

  React.useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      const dataObj = JSON.parse(data);

      if (dataObj.notes) {
        if (dataObj.notes != "") {
          setShowRecover(true);
          setOldNotes(dataObj.notes);
        } else {
          localStorage.removeItem("data");
        }
      }
    }
  }, []);

  if (showRecover) {
    return (
      <Modal
        title={t("recovery.title")}
        show={showRecover}
        onClose={() => setShowRecover(true)}
        footer={
          <div className={classes.footer}>
            <Button
              classNames={classes.right}
              onClick={() => {
                setNotes(notes + "\r\n" + oldNotes);
                localStorage.removeItem("data");
                setShowRecover(false);
              }}
            >
              {t("recovery.recover")}
            </Button>
            <Button
              classNames={`${classes.left} ${classes.dangerButton}`}
              onClick={() => {
                localStorage.removeItem("data");
                setShowRecover(false);
              }}
            >
              {t("recovery.ignore")}
            </Button>
          </div>
        }
      >
        <p>
          {t("recovery.message.1")}
          <br />
          <br />
          {t("recovery.message.2")}
          <br />
          {t("recovery.message.3")}
        </p>
      </Modal>
    );
  } else {
    return <React.Fragment />;
  }
}
