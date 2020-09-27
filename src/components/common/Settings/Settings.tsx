import Button from "../Button";
import Modal from "../Modal";
import React from "react";
import Switch from "../Switch";
import { useData } from "context";
import useStyles from "./Settings.styles";

export interface ISettingsProps {
  show: boolean;
  onClose: () => void;
}

export default function Settings(props: ISettingsProps): JSX.Element {
  const classes = useStyles();
  const { show, onClose } = props;
  const { names, setNames } = useData()!; // eslint-disable-line

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Settings"
      footer={<Button onClick={() => onClose()}>Close</Button>}
    >
      <div className={classes.container}>
        <Switch
          label="Use player names"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNames(event.currentTarget.checked);
          }}
          checked={names}
        />
      </div>
    </Modal>
  );
}
