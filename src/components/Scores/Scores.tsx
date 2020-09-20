import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import Score from "components/common/Score";
import { useData } from "context";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";

export default function Scores(): JSX.Element {
  const theme = useTheme<ITheme>();
  const classes = useStyles();

  // eslint-disable-next-line
  const { wins, games, setWins, setGames } = useData()!;

  const rate = games > 0 ? Math.floor((wins / games) * 100) : 100;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <ProgressBar
            progress={rate}
            text={`Winning rate ${rate}%`}
            backgroundColor={theme.background_danger}
            progressColor={theme.background_success}
            classNames={classes.progress}
          />
          <ProgressBar
            progress={rate}
            text={`Crewmate win rate ${rate}%`}
            backgroundColor={theme.background_crewmate_danger}
            progressColor={theme.background_crewmate_success}
            classNames={classes.progress}
          />
          <ProgressBar
            progress={rate}
            text={`Impostor win rate ${rate}%`}
            backgroundColor={theme.background_impostor_danger}
            progressColor={theme.background_impostor_success}
            classNames={classes.progress}
          />
        </div>

        <div className={classes.scores}>
          <Score
            title="Games won"
            value={wins}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setWins(parseInt(event.currentTarget.value))
            }
          />
          <Score
            title="Total games"
            value={games}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setGames(parseInt(event.currentTarget.value))
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
}
