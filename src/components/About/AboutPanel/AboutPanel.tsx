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
        <a
          href="https://www.twitch.tv/fuslie"
          target="_blank"
          rel="noopener noreferrer"
        >
          fuslie
        </a>
        <br />
        Inspired this project
      </p>
      <p>
        <a
          href="https://github.com/Kedyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kedyn Macedonio
        </a>
        <br />
        Developer / Creator / Project Maintainer / Spanish (MX) Translations
      </p>
      <p>
        <a
          href="https://github.com/francistse23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Francis Tse
        </a>
        <br />
        Developer / Project Maintainer
      </p>
      <p>
        <a
          href="https://github.com/kevinydhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Han
        </a>
        <br />
        UI Design
      </p>
      <p>
        <a
          href="https://github.com/chilblane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Singer
        </a>
        <br />
        UX/UI Developer + Product Direction
      </p>
      <p>
        <a
          href="https://github.com/Viou"
          target="_blank"
          rel="noopener noreferrer"
        >
          Griffin Suparto
        </a>
        <br />
        Developer / Project Contributor
      </p>
      <p>
        <a
          href="https://github.com/danilolmoura"
          target="_blank"
          rel="noopener noreferrer"
        >
          Danilo Moura
        </a>
        <br />
        Portuguese (BR) Translations
      </p>
      <p>
        <a
          href="https://github.com/Kinishina"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinishina
        </a>
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
        -{" "}
        <a
          href="https://github.com/Kedyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kedyn Macedonio
        </a>
      </p>
    </div>
  );
}
