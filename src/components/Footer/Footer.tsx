import React from "react";
import useStyles from "./Footer.styles";
import { INITIAL_DATA, useData } from "context";
import Modal from "components/common/Modal";
import FeedbackForm from "../FeedbackForm";

const patchNotes = [
  {
    title: "Added",
    items: [
      "Separate Scores for impostors and innocents",
      "Color change menu for players (click player icon to open)",
      "Reset Scores",
      "Reset Round (players positions)",
      "Reset all button, resets players positions and scores.",
      "Reset Notes",
      "Settings Modal",
      "Recovery Notes Modal",
      "Change log Modal",
      "Feedback Modal",
      "Draggable Players on Map",
      "Button to reset draggable players on Map",
    ],
  },
  {
    title: "Fixed",
    items: ["Player background color contrast", "Danger theme button"],
  },
  { title: "Changed", items: ["Use names to the settings modal."] },
  { title: "Removed", items: ["Light theme"] },
  {
    title: "Developer Notes",
    items: [
      "We are working in allowing custom theme colors.",
      "We added a feedback link at the bottom at the page, we love to hear from all of you.",
    ],
  },
];

export default function Footer(): JSX.Element {
  const classes = useStyles();
  const { version } = useData()!; // eslint-disable-line
  const [showNotes, setShowNotes] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  React.useEffect(() => {
    if (version !== INITIAL_DATA.version) {
      setShowNotes(true);
    }
  }, []);

  return (
    <footer className={classes.root}>
      <small>
        fusliez notes{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes/releases/tag/v0.7.0"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            setShowNotes(!showNotes);
          }}
        >
          {version}
        </a>{" "}
        made with &#10084; by the{" "}
        <a href="https://github.com/Kedyn/fusliez-notes#authors-and-acknowledgment">
          fuslie fam
        </a>
        . <a onClick={() => setShowForm(true)}>Feedback</a>
        <Modal
          title="Feedback Form"
          show={showForm}
          onClose={() => setShowForm(false)}
        >
          <FeedbackForm />
        </Modal>
      </small>
      {/* CHANGE LOG */}
      <Modal
        title={`Change Log v${version}`}
        show={showNotes}
        onClose={() => setShowNotes(false)}
      >
        {patchNotes.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Modal>
    </footer>
  );
}
