import { Button, Col, Form, Row } from "react-bootstrap";

import React from "react";

export interface IControlsProps {
  dark: boolean;
  names: boolean;
  wins: number;
  games: number;
  onThemeDark(set: boolean): void;
  onNames(show: boolean): void;
  onWins(wins: number): void;
  onGames(games: number): void;
}

export default function Controls(props: IControlsProps): JSX.Element {
  const {
    dark,
    names,
    wins,
    games,
    onThemeDark,
    onNames,
    onWins,
    onGames,
  } = props;

  const handleWin = () => {
    onWins(wins + 1);
    onGames(games + 1);
  };

  return (
    <React.Fragment>
      <Row id="controls-wrapper">
        <Col>
          <Form.Check
            type="switch"
            id="theme"
            label={dark ? "Light theme" : "Dark theme"}
            checked={dark}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onThemeDark(event.currentTarget.checked)
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check
            type="switch"
            id="players-names"
            label="Show players name"
            checked={names}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onNames(event.currentTarget.checked)
            }
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Button block variant="success" onClick={handleWin}>
            Win
          </Button>
        </Col>
        <Col>
          <Button block variant="danger" onClick={() => onGames(games + 1)}>
            Lose
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block variant="secondary">
            Reset Players
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>notes:</h2>

          <Form.Control as="textarea" rows={20} />
        </Col>
      </Row>
    </React.Fragment>
  );
}
