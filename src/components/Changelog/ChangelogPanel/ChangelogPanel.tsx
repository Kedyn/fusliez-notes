import React from "react";
import useStyles from "./ChangelogPanel.styles";
import { useMobile } from "context/MobileContextProvider";
import { VERSION } from "utils/constants";

// kedyn I suggest you put this content somewhere else. maybe involve a markdown converter
const NOTES = [
  {
    title: "Highlights",
    items: [
      <>Added Spanish, Russian, Portuguese languages (check settings).</>,
      <>Added support for mobile devices in portrait and landscape.</>,
      <>
        Changed win rate presentation to circular, which can be switched on
        settings.
      </>,
      <>No longer saves players positions or scores from session to session.</>,
      <>
        Added information on those of us who worked on this project by clicking
        the fuslie fam link, at the bottom of the page, please give it a look.
        Show some love for all.
      </>,
    ],
  },
  {
    title: "Development Notes",
    items: [
      <>
        We can only test the mobile version so much on our side.
        <br />
        If you found anything that doesn&apos;t work as well as you&apos;d like,
        please leave us a feedback!
      </>,
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
