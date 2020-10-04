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
      <>Added support for mobile devices in portrait and landscape</>,
      <>Changed win rate presentation to circular</>,
    ],
  },
  {
    title: "Fixes",
    items: [
      <>Performance issues with notes</>,
      <>"Show Player Names" settings bug</>,
    ],
  },
  {
    title: "Development Notes",
    items: [
      <>We are working in allowing custom theme colors.</>,
      <>
        We can only test the mobile version so much on our side. If you found
        anything that doesn't work as well as you'd like, please leave us a
        feedback!
      </>,
      <>
        We added a feedback link at the bottom at the page, we love to hear from
        all of you.
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
