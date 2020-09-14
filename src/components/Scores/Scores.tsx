import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import Score from "components/common/Score";
import { useData } from "context";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";

export interface IScoresProps {}

export default function Scores(props: IScoresProps): JSX.Element {
  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const { wins, games, setWins, setGames } = useData()!;

  const rate = games > 0 ? Math.floor((wins / games) * 100) : 100;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ProgressBar
          progress={rate}
          text={`Win rate ${rate}%`}
          background_color={theme.background_danger}
          progress_color={theme.background_success}
          classNames={classes.progress}
        />

        <div className={classes.scores}>
          <Score
            title="Games won"
            value={wins}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const new_wins = event.currentTarget.value;
              setWins(parseInt(new_wins));
              localStorage.setItem("wins", new_wins);
            }}
          />
          <Score
            title="Total games"
            value={games}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const new_games = event.currentTarget.value;
              setGames(parseInt(new_games));
              localStorage.setItem("games", new_games);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
