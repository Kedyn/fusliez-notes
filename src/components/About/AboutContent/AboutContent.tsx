import React from "react";
import { VERSION } from "utils/constants";
import useStyles from "./AboutContent.styles";

export default function AboutContent(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>fusliez notes v{VERSION}</h4>
      <a href="https://www.twitch.tv/fuslie">
        <strong>fuslie</strong>
      </a>
      <br />
      <small>Inspired this project</small>
      <br />
      <a href="https://github.com/Kedyn">
        <strong>Kedyn Macedonio</strong>
      </a>
      <br />
      <small>
        Developer / Creator / Project Maintainer / Spanish (MX) Translations
      </small>
      <br />
      <a href="https://github.com/francistse23">
        <strong>Francis Tse</strong>
      </a>
      <br />
      <small>Developer / Project Maintainer</small>
      <br />
      <a href="https://github.com/kevinydhan">
        <strong>Kevin Han</strong>
      </a>
      <br />
      <small>UI Design</small>
      <br />
      <a href="https://github.com/chilblane">
        <strong>Daniel Singer</strong>
      </a>
      <br />
      <small>UI / Project Contributor</small>
      <br />
      <a href="https://github.com/Viou">
        <strong>Griffin Suparto</strong>
      </a>
      <br />
      <small>Developer / Project Contributor</small>
      <br />
      <a href="https://github.com/Kinishina">
        <strong>Kinishina</strong>
      </a>
      <br />
      <small>Russian (RU) Translations</small>
      <br />
      <a href="https://github.com/danilolmoura">
        <strong>Danilo Moura</strong>
      </a>
      <br />
      <small>Portuguese (BR) Translations</small>
      <br />

      <p>
        <small>
          Thank you to everyone who has reported issues / suggested new
          features.
          <br />
          Thank you to everyone who uses this tool.
          <br />
          Special thanks to all the fusfam who helps us tests.
        </small>
      </p>
      <p>
        <small>
          Please if you have some spare time check out everyone mentioned here
          and show some love to them.
        </small>
      </p>
      <p>
        <small>
          PS: If I left anyone out, please let me know. I do not mean to forget
          anyone, but know that I am grateful to everyone who has taken part of
          this.
        </small>
      </p>
      <p className={classes.outro}>
        -{" "}
        <a href="https://github.com/Kedyn">
          <small>Kedyn Macedonio</small>
        </a>
      </p>
    </div>
  );
}
