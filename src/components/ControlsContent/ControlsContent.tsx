import Button from "components/common/Button";
import React from "react";
import Switch from "components/common/Switch";
import { Themes } from "themes/themes";
import { useData } from "context";
import useStyles from "./ControlsContent.styles";

export default function ControlsContent(): JSX.Element {
  const classes = useStyles();
  const {
    names,
    theme,
    wins,
    games,
    setNames,
    setTheme,
    setWins,
    setGames,
  } = useData()!; // eslint-disable-line

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Switch
          label="Dark theme"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget.checked) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
          checked={theme === Themes.dark}
        />

        <Switch
          label="Use player names"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNames(event.currentTarget.checked);
          }}
          checked={names}
        />

        <Button
          onClick={() => {
            setWins(wins + 1);
            setGames(games + 1);
          }}
        >
          Win
        </Button>
        <Button
          onClick={() => {
            setGames(games + 1);
          }}
        >
          Lose
        </Button>
        <Button>Reset Players</Button>
        <h2>notes</h2>
        <textarea rows={30} className={classes.notes}></textarea>
      </div>
    </React.Fragment>
  );
}
