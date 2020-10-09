import React from "react";
import { useTranslation } from "react-i18next";
import { VERSION } from "utils/constants";
import useStyles from "./AboutPanel.styles";
import { useMobile } from "context/MobileContextProvider";

export default function AboutPanel(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile });

  return (
    <div className={classes.AboutPanel}>
      {isMobile && (
        <h2 className={classes.AboutPanelTitle}>{t("menu.about")}</h2>
      )}
      <h3>fusliez notes v{VERSION}</h3>
      <p>
        <a href="https://www.twitch.tv/fuslie">fuslie</a>
        <br />
        Inspired this project
      </p>
      <p>
        <a href="https://github.com/Kedyn">Kedyn Macedonio</a>
        <br />
        Developer / Creator / Project Maintainer / Spanish (MX) Translations
      </p>
      <p>
        <a href="https://github.com/francistse23">Francis Tse</a>
        <br />
        Developer / Project Maintainer
      </p>
      <p>
        <a href="https://github.com/kevinydhan">Kevin Han</a>
        <br />
        UI Design
      </p>
      <p>
        <a href="https://github.com/chilblane">Daniel Singer</a>
        <br />
        UI / Project Contributor
      </p>
      <p>
        <a href="https://github.com/Viou">Griffin Suparto</a>
        <br />
        Developer / Project Contributor
      </p>
      <p>
        <a href="https://github.com/Kinishina">Kinishina</a>
        <br />
        Russian (RU) Translations
      </p>
      <hr />
      <p>
        Thank you to everyone who has reported issues / suggested new features.
      </p>
      <p>Thank you to everyone who uses this tool.</p>
      <p>Special thanks to all the fusfam who helps us tests.</p>
      <p>
        Please, if you have some spare time, check out everyone mentioned here
        and show some love to them.
      </p>
      <p>
        PS: If I left anyone out, please let me know. I do not mean to forget
        anyone, but know that I am grateful to everyone who has taken part of
        this.
      </p>
      <p className={classes.Outro}>
        - <a href="https://github.com/Kedyn">Kedyn Macedonio</a>
      </p>
    </div>
  );
}
