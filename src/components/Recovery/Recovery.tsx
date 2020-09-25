import Button from "components/common/Button";
import Modal from "components/common/Modal";
import React from "react";
import { useData } from "context";
import useStyles from "./Recovery.styles";

export default function Recovery(): JSX.Element {
  const [showRecover, setShowRecover] = React.useState(false);
  const [oldNotes, setOldNotes] = React.useState("");
  const classes = useStyles();
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
        title="Recover old notes"
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
              Recover
            </Button>
            <Button
              classNames={classes.left}
              onClick={() => {
                localStorage.removeItem("data");
                setShowRecover(false);
              }}
            >
              Ignore
            </Button>
          </div>
        }
      >
        <p>
          It seems that you have old notes that can be recovered.
          <br />
          <br />
          Click Recover to add this notes to your current notes.
          <br />
          Click Ignore to delete the old notes and keep your current ones.
        </p>
      </Modal>
    );
  } else {
    return <React.Fragment />;
  }
}
