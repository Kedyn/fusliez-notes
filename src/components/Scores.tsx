import { Col, Form, ProgressBar, Row } from "react-bootstrap";

import React from "react";
import "./Scores.css";

export interface IScoresProps {
  wins: number;
  games: number;
  onWins(wins: number): void;
  onGames(games: number): void;
}

export default function Scores(props: IScoresProps): JSX.Element {
  const { wins, games, onWins, onGames } = props;
  // using Math.ceil instead of Math.floor
  // just to make leslie feel better KEKW
  const rate = games > 0 ? Math.ceil((wins / games) * 100) : 100;

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ProgressBar className="progress-bar-lose">
            <ProgressBar className="progress-bar-win" now={rate} />
            <div id="win-rate" className="h5" style={{ color: "white" }}>
              Winning rate: {rate}%
            </div>
          </ProgressBar>
        </Col>
      </Row>
      <Row className="my-2">
        <Col className="pr-1">
          <Form.Control
            type="number"
            min={0}
            className="counter bg-secondary text-white"
            value={wins}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onWins(parseInt(event.currentTarget.value))
            }
          />
          <div className="text-center text-muted small">Games won</div>
        </Col>
        <Col className="pl-1">
          <Form.Control
            type="number"
            min={0}
            className="counter bg-secondary text-white"
            value={games}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onGames(parseInt(event.currentTarget.value))
            }
          />
          <div className="text-center text-muted small">Total games</div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
