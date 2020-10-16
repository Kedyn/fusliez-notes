import React from "react";
import { VERSION } from "utils/constants";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./ChangelogPanel.styles";

// kedyn I suggest you put this content somewhere else. maybe involve a markdown converter
const NOTES = [
  {
    title: "Highlights",
    items: [
      <>Added Persian and Polish translations</>,
      <>UI Revamp.</>,
      <>Added lock editing player mode.</>,
      <>Better support for mobile.</>,
      <>Color blind mode (settings).</>,
    ],
  },
  {
    title: "Development Notes",
    items: [
      <>
        If you would like to see all the changes we have made please read our{" "}
        <a
          href="https://github.com/Kedyn/fusliez-notes/blob/master/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHANGELOG.md
        </a>{" "}
        file.
      </>,
    ],
  },
];

export default function ChangelogPanel(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile });

  return (
    <div className={classes.ChangelogPanel}>
      {isMobile && (
        <h2
          className={classes.ChangelogPanelTitle}
        >{`fusliez notes v${VERSION} notes`}</h2>
      )}
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
    </div>
  );
}
