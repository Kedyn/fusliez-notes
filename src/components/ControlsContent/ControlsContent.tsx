import Button from "components/common/Button";
import React from "react";
import Switch from "components/common/Switch";
import { Themes } from "themes/themes";
import { useData } from "context";
import useStyles from "./ControlsContent.styles";

export interface IControlsContentProps {}

export default function ControlsContent(
  props: IControlsContentProps
): JSX.Element {
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
  } = useData()!;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Switch
          label="Dark theme"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget.checked) {
              setTheme(Themes.dark);
              localStorage.setItem("theme", "dark");
            } else {
              setTheme(Themes.light);
              localStorage.setItem("theme", "light");
            }
          }}
          checked={theme === Themes.dark}
        />

        <Switch
          label="Use player names"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const checked = event.currentTarget.checked;
            setNames(checked);
            localStorage.setItem("names", checked ? "true" : " false");
          }}
          checked={names}
        />

        <Button
          onClick={() => {
            setWins(wins + 1);
            setGames(games + 1);
            localStorage.setItem("wins", (wins + 1).toString());
            localStorage.setItem("games", (games + 1).toString());
          }}
        >
          Win
        </Button>
        <Button
          onClick={() => {
            setGames(games + 1);
            localStorage.setItem("games", (games + 1).toString());
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
