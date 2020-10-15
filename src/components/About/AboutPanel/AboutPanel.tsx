import React from "react";
import { VERSION } from "utils/constants";
import { useMobile } from "context/MobileContextProvider";
import useStyles from "./AboutPanel.styles";
import { useTranslation } from "react-i18next";

export default function AboutPanel(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile } = useMobile()!; // eslint-disable-line
  const classes = useStyles({ isMobile });

  const credits = [
    {
      name: "fuslie",
      link: "https://www.twitch.tv/fuslie",
      contribution: "Inspired this project",
    },
    {
      name: "Kedyn Macedonio",
      link: "https://github.com/Kedyn",
      contribution:
        "Developer / Creator / Project Maintainer / Spanish (MX) Translations",
    },
    {
      name: "Francis Tse",
      link: "https://github.com/francistse23",
      contribution: "Developer / Project Maintainer",
    },
    {
      name: "Kevin Han",
      link: "https://github.com/kevinydhan",
      contribution: "UI Design / Developer / Project Contributor",
    },
    {
      name: "Daniel Singer",
      link: "https://github.com/chilblane",
      contribution: "UX/UI Developer + Product Direction",
    },
    {
      name: "Griffin Suparto",
      link: "https://github.com/Viou",
      contribution: "Developer / Project Contributor",
    },
    {
      name: "Danilo Moura",
      link: "https://github.com/danilolmoura",
      contribution: "Portuguese (BR) Translations",
    },
    {
      name: "Kinishina",
      link: "https://github.com/danilolmoura",
      contribution: "Russian (RU) Translations",
    },
    {
      name: "Alena Choong",
      link: "https://github.com/leeeennyy",
      contribution: "Developer / Project Contributor",
    },
    {
      name: "Fabian9799",
      link: "https://github.com/fabian9799",
      contribution: "German (DE) Translation",
    },
    {
      name: "HoneyLemonDaisy",
      link: "https://twitter.com/honeylemondaisy",
      contribution: "Social share image",
    },
    {
      name: "Parsa Eskandarnejad",
      link: "https://github.com/parsaaes",
      contribution: "Persian (IR) Translation",
    },
    {
      name: "Michał Stankiewicz",
      link: "http://fb.niezwyczajniezwyczajny.pl",
      contribution: "Polish (PL) Translation",
    },
  ];

  return (
    <div className={classes.AboutPanel}>
      {isMobile && (
        <h2 className={classes.AboutPanelTitle}>{t("menu.about")}</h2>
      )}
      <h3>fusliez notes v{VERSION}</h3>
      {credits.map((person, index) => (
        <p key={index}>
          <a href={person.link} target="_blank" rel="noopener noreferrer">
            {person.name}
          </a>
          <br />
          {person.contribution}
        </p>
      ))}
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
      <hr />
      <small>
        Disclaimer this app is in no way associated with InnerSloth.
      </small>
    </div>
  );
}
