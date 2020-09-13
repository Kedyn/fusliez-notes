import { ITheme } from "utils/types";
import ProgressBar from "components/common/ProgressBar";
import React from "react";
import Score from "components/common/Score";
import useStyles from "./Scores.styles";
import { useTheme } from "react-jss";

export interface IScoresProps {}

export default function Scores(props: IScoresProps): JSX.Element {
  const theme = useTheme<ITheme>();
  const classes = useStyles();

  const rate = 50;

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
          <Score title="Games won" />
          <Score title="Total games" />
        </div>
      </div>
    </React.Fragment>
  );
}
