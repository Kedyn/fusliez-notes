import Modal from "components/common/Modal";
import React from "react";
import { VERSION } from "utils/constants";

export interface IVersionNotesProps {
  show: boolean;
  onClose: () => void;
}

const NOTES = [
  {
    title: "Highlights",
    items: [
      <>Added support to change all theme colors, not players.</>,
      <>Added support for mobile devices in portrait and landscape.</>,
      <>
        Changed win rate presentation to circular, which can be switched on
        settings.
      </>,
      <>
        Added information on those of us who worked on this project by clicking
        fuslie fam link,
        <br />
        bottom of the page, please give it a look. Show some love for all.
      </>,
    ],
  },
  {
    title: "Development Notes",
    items: [
      <>
        We can only test the mobile version so much on our side.
        <br />
        If you found anything that doesn't work as well as you'd like, please
        leave us a feedback!
      </>,
      <>
        If you would like to see all the changes we have made please read our{" "}
        <a href="https://github.com/Kedyn/fusliez-notes/blob/master/CHANGELOG.md">
          CHANGELOG.md
        </a>{" "}
        file.
      </>,
    ],
  },
];

export default function VersionNotes(props: IVersionNotesProps): JSX.Element {
  const { show, onClose } = props;

  return (
    <Modal
      title={`fusliez notes v${VERSION} notes`}
      show={show}
      onClose={onClose}
    >
      {NOTES.map(({ title, items }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Modal>
  );
}
