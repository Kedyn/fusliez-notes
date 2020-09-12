import { Col, Container, Row } from "react-bootstrap";

import Controls from "./Controls";
import MainContent from "./MainContent";
import Maps from "./Maps";
import React from "react";

export interface IAppProps {}

export default function App(props: IAppProps): JSX.Element {
  const [theme, setTheme] = React.useState(false);
  const [wins, setWins] = React.useState(0);
  const [games, setGames] = React.useState(0);
  const [reset, setReset] = React.useState(false);
  const [names, setNames] = React.useState(true);
  const [theme_class, setThemeClass] = React.useState(
    "bg-light text-dark vh-100 h-100"
  );

  React.useEffect(() => {
    if (theme) {
      setThemeClass("bg-dark text-white vh-100 h-100");
    } else {
      setThemeClass("bg-light text-dark vh-100 h-100");
    }
  }, [theme]);

  return (
    <React.Fragment>
      <Container fluid className={theme_class}>
        <div className="d-flex">
          <div id="main">
            <MainContent
              dark={theme}
              names={names}
              wins={wins}
              games={games}
              reset={reset}
              onWins={(wins: number) => setWins(wins)}
              onGames={(games: number) => setGames(games)}
              onReset={() => setReset(false)}
            />
          </div>
          <div id="controls">
            <Controls
              dark={theme}
              names={names}
              wins={wins}
              games={games}
              onThemeDark={(set: boolean) => setTheme(set)}
              onNames={(show: boolean) => setNames(show)}
              onWins={(wins: number) => setWins(wins)}
              onGames={(games: number) => setGames(games)}
              onReset={() => setReset(true)}
            />
          </div>
          <div id="maps" className="d-lg-block d-none">
            <Maps />
          </div>
        </div>
        <Row className="mt-auto d-none">
          <Col className="text-center">
            <small>Created by Kedyn Macedonio (AKA SykO).</small>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
