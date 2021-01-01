import { ARTISTS, DEVELOPERS, SPECIAL, TRANSLATORS } from "constants/about";
import { Trans, useTranslation } from "react-i18next";

import React from "react";
import { VERSION } from "constants/main";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./About.styles";

export default function About(): JSX.Element {
  const { t, i18n } = useTranslation();

  const isMobile = useSelector(getIsMobile);

  const classes = useStyles({ isMobile });

  const teams = [
    {
      title: t("about.developers"),
      people: DEVELOPERS,
    },
    { title: t("about.translators"), people: TRANSLATORS },
    { title: t("about.artists"), people: ARTISTS },
    { title: t("about.special"), people: SPECIAL },
  ];

  return (
    <div style={{ direction: i18n.dir() }} className={classes.About}>
      {isMobile && <h2 className={classes.AboutHeader}>{t("menu.about")}</h2>}
      <h3 className={classes.AboutTitle}>fusliez notes v{VERSION}</h3>

      <div className={classes.AboutTeams}>
        {teams.map((team, index) => (
          <div key={index} className={classes.AboutTeam}>
            <h4>{team.title}</h4>

            {team.people.map((person, index) => (
              <div key={index} className={classes.AboutPerson}>
                <a href={person.link} target="_blank" rel="noopener noreferrer">
                  {person.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      <hr />

      <p>
        <Trans i18nKey="about.partOne">
          First, thanks to
          <a
            href="https://www.twitch.tv/fuslie"
            target="_blank"
            rel="noopener noreferrer"
          >
            fuslie
          </a>
          for inspiring this project.
        </Trans>
      </p>

      <p>{t("about.partTwo")}</p>

      <p>{t("about.partThree")}</p>

      <p>{t("about.partFour")}</p>

      <p>{t("about.partFive")}</p>

      <p className={classes.AboutOutro}>
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

      <p>
        <small>{t("about.disclaimer")}</small>
      </p>
    </div>
  );
}
