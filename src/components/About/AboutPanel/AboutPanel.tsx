import { ARTISTS, DEVELOPERS, SPECIAL, TRANSLATORS } from "constants/about";

import React from "react";
import { VERSION } from "constants/main";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./AboutPanel.styles";
import { useTranslation } from "react-i18next";

export default function AboutPanel(): JSX.Element {
  const { t } = useTranslation();

  const isMobile = useSelector(getIsMobile);

  const classes = useStyles({ isMobile });

  const teams = [
    {
      title: "Developers",
      people: DEVELOPERS,
    },
    { title: "Translators", people: TRANSLATORS },
    { title: "Artists", people: ARTISTS },
    { title: "Special Thanks To", people: SPECIAL },
  ];

  return (
    <div className={classes.AboutPanel}>
      {isMobile && (
        <h2 className={classes.AboutPanelHeader}>{t("menu.about")}</h2>
      )}
      <h3 className={classes.AboutPanelTitle}>fusliez notes v{VERSION}</h3>

      <div className={classes.AboutPanelTeams}>
        {teams.map((team, index) => (
          <div key={index} className={classes.AboutPanelTeam}>
            <h4>{team.title}</h4>

            {team.people.map((person, index) => (
              <div key={index} className={classes.AboutPanelPerson}>
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
        First, thanks to{" "}
        <a
          href="https://www.twitch.tv/fuslie"
          target="_blank"
          rel="noopener noreferrer"
        >
          fuslie
        </a>{" "}
        for inspiring this project.
      </p>

      <p>
        Thanks to everyone who has suggested enhancements, reported bugs, or any
        other support on this project.
      </p>

      <p>Thanks to everyone who uses this tool.</p>

      <p>
        Please, if you have some spare time, check out everyone mentioned here
        and show some love to them.
      </p>

      <p>
        PS: If I left anyone out, please let me know. I do not mean to forget
        anyone, but know that I am grateful to everyone who has taken part of
        this.
      </p>

      <p className={classes.AboutPanelOutro}>
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
        <small>
          Disclaimer this app is in no way associated with InnerSloth.
        </small>
      </p>
    </div>
  );
}
