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
    notes,
    resetRound,
    resetAll,
    setNames,
    setTheme,
    setWins,
    setGames,
    setNotes,
  } = useData()!; // eslint-disable-line

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.switchesContainer}>
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
        </div>

        <div className={classes.scoreButtons}>
          <Button
            onClick={() => {
              setWins(wins + 1);
              setGames(games + 1);
            }}
            classNames={classes.win}
          >
            Win
          </Button>
          <Button
            onClick={() => {
              setGames(games + 1);
            }}
            classNames={classes.lose}
          >
            Lose
          </Button>
        </div>

        <div className={classes.buttonContainer}>
          <Button classNames={classes.reset} onClick={() => resetRound()}>
            Reset Round
          </Button>
          <Button classNames={classes.reset} onClick={() => resetAll()}>
            Reset Everything (Player names, wins, losses, notes)
          </Button>
        </div>
        <h2>Notes</h2>
        <textarea
          rows={20}
          className={classes.notes}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNotes(event.currentTarget.value)
          }
          value={notes}
        />
      </div>
    </React.Fragment>
  );
}
