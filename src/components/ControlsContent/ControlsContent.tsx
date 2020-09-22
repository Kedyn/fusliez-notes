import Button from "components/common/Button";
import React from "react";
import WinsLossesButton from "../WinsLossesButton";
import { useData } from "context";
import useStyles from "./ControlsContent.styles";

export default function ControlsContent(): JSX.Element {
  const classes = useStyles();
  const {
    theme,
    notes,
    innocentWins,
    innocentLosses,
    impostorWins,
    impostorLosses,
    resetPlayersPositions,
    resetAll,
    setImpostorWins,
    setImpostorLosses,
    setInnocentWins,
    setInnocentLosses,
    setNotes,
  } = useData()!; // eslint-disable-line

  function resetScores() {
    setInnocentWins(0);
    setInnocentLosses(0);
    setImpostorWins(0);
    setImpostorLosses(0);
  }

  return (
    <div id="controls" className={classes.root}>
      <div className={classes.scoreButtons}>
        <div className={classes.titleContainer}>
          <h4 className={classes.title} />
          <h4 className={classes.title}>Wins</h4>
          <h4 className={classes.title}>Losses</h4>
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4>Innocent</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentWins(innocentWins - 1)}
            increment={() => setInnocentWins(innocentWins + 1)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.innocentTextColor}
            decrement={() => setInnocentLosses(innocentLosses - 1)}
            increment={() => setInnocentLosses(innocentLosses + 1)}
          />
        </div>

        <div className={classes.scoreButtonsSection}>
          <h4>Impostor</h4>
          <WinsLossesButton
            buttonBackgroundColor={theme.impostorTextColor}
            decrement={() => setImpostorWins(impostorWins - 1)}
            increment={() => setImpostorWins(impostorWins + 1)}
          />
          <WinsLossesButton
            buttonBackgroundColor={theme.impostorTextColor}
            decrement={() => setImpostorLosses(impostorLosses - 1)}
            increment={() => setImpostorLosses(impostorLosses + 1)}
          />
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <Button classNames={classes.reset} onClick={() => resetScores()}>
          Reset Scores
        </Button>
        <Button
          classNames={classes.reset}
          onClick={() => resetPlayersPositions()}
        >
          Reset Round
        </Button>
        <Button
          classNames={`${classes.reset} ${classes.dangerButton}`}
          onClick={() => resetAll()}
        >
          Reset All
        </Button>
      </div>
      <h2>Notes</h2>
      <div>
        <textarea
          className={classes.notes}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNotes(event.currentTarget.value)
          }
          value={notes}
        />
      </div>
    </div>
  );
}
