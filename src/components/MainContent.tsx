import { Col, Form, Image, Row } from "react-bootstrap";

import Header from "./Header";
import { IPlayer } from "utils/types";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import Scores from "./Scores";

export interface IMainContentProps {
  dark: boolean;
  names: boolean;
  wins: number;
  games: number;
  reset: boolean;
  onWins(wins: number): void;
  onGames(games: number): void;
  onReset(): void;
}

export default function MainContent(props: IMainContentProps): JSX.Element {
  const [innocent_players, setInnocentPlayers] = React.useState<Array<IPlayer>>(
    []
  );
  const [sus_players, setSusPlayers] = React.useState<Array<IPlayer>>([]);
  const [evil_players, setEvilPlayers] = React.useState<Array<IPlayer>>([]);
  const [dead_players, setDeadPlayers] = React.useState<Array<IPlayer>>([]);
  const [unknown_players, setUnknownPlayers] = React.useState<Array<IPlayer>>([
    { id: "blue", name: "", color: "blue" },
    { id: "brown", name: "", color: "brown" },
    { id: "gray", name: "", color: "gray" },
    { id: "green", name: "", color: "green" },
    { id: "lightGreen", name: "", color: "lightGreen" },
    { id: "orange", name: "fuslie", color: "orange" },
    { id: "pink", name: "", color: "pink" },
    { id: "purple", name: "", color: "purple" },
    { id: "red", name: "", color: "red" },
    { id: "teal", name: "", color: "teal" },
    { id: "white", name: "", color: "white" },
    { id: "yellow", name: "", color: "yellow" },
  ]);

  const { dark, names, reset, onReset } = props;

  const sections = ["innocent", "sus", "evil", "dead", "unknown"];

  const lists: {
    [key: string]: [
      Array<IPlayer>,
      React.Dispatch<React.SetStateAction<Array<IPlayer>>>
    ];
  } = {
    innocent: [innocent_players, setInnocentPlayers],
    sus: [sus_players, setSusPlayers],
    evil: [evil_players, setEvilPlayers],
    dead: [dead_players, setDeadPlayers],
    unknown: [unknown_players, setUnknownPlayers],
  };

  const handleChange = (
    list: string,
    player: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const players = lists[list][0];

    players[player].name = event.currentTarget.value;

    lists[list][1](players);
  };

  React.useEffect(() => {
    if (reset == true) {
      const players = [
        ...innocent_players,
        ...sus_players,
        ...evil_players,
        ...dead_players,
        ...unknown_players,
      ];

      setInnocentPlayers([]);
      setSusPlayers([]);
      setEvilPlayers([]);
      setDeadPlayers([]);
      setUnknownPlayers(players);

      onReset();
    }
  }, [reset]);

  return (
    <React.Fragment>
      <Header />
      <Scores {...props} />

      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section != "evil" ? section : "evil / hit list"}</h2>

          <ReactSortable
            tag={Row}
            group="players"
            list={lists[section][0]}
            setList={lists[section][1]}
            className="mx-0 justify-content-center align-items-center align-content-start players h-100"
            options={{ handle: ".player-handle" }}
          >
            {lists[section][0].map(({ id, color, name }, index) => (
              <Col
                key={id}
                xs={names ? 6 : 3}
                className={`${names ? "mb-2" : "m-1"} ${
                  index % 2 ? "pl-1" : "pr-1"
                }`}
              >
                <Row
                  className={`border ${
                    dark ? `border-secondary` : "border-dark"
                  } rounded ${index % 2 ? "ml-0" : "mr-0"} ${
                    names ? "pl-1" : ""
                  }`}
                  style={{
                    backgroundColor:
                      !name || !names
                        ? "transparent"
                        : color === "brown"
                        ? "	saddlebrown"
                        : color,
                  }}
                >
                  <Col
                    xs={names ? 1 : false}
                    className="d-flex justify-content-center align-items-center player-wrapper player-handle"
                  >
                    <Image
                      src={`assets/${color}.png`}
                      alt={color}
                      className={`${names ? "player-img" : ""} ${
                        name != "" || !names ? "" : "not-active"
                      }`}
                    />
                  </Col>

                  {names && (
                    <Col className="p-0 pr-1">
                      <Form.Control
                        type="text"
                        placeholder="Player name"
                        size="sm"
                        className={`my-1 px-3 ${dark ? "dark-input" : ""}`}
                        defaultValue={name}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => handleChange(section, index, event)}
                        style={{
                          color: dark ? "white" : "black",
                          fontWeight: 600,
                          textShadow: dark
                            ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                            : "-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF",
                        }}
                      />
                    </Col>
                  )}
                </Row>
              </Col>
            ))}
          </ReactSortable>
        </div>
      ))}
    </React.Fragment>
  );
}
