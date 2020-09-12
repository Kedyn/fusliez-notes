import { Col, Image, Row } from "react-bootstrap";

import Draggable from "react-draggable";
import React from "react";

export interface IMapsProps {}

export default function Maps(props: IMapsProps): JSX.Element {
  const [map, setMap] = React.useState("skeld");

  const players = [
    "blue",
    "brown",
    "gray",
    "green",
    "lightGreen",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "white",
    "yellow",
  ];

  return (
    <React.Fragment>
      <h2>Maps</h2>

      <Row>
        <Col className="d-flex justify-content-center">
          <Image
            className={`map-name rounded-pill ${
              map == "skeld" ? "border border-primary" : ""
            }`}
            src="assets/The_Skeld.png"
            alt="The Skeld"
            fluid
            onClick={() => setMap("skeld")}
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <Image
            className={`map-name rounded-pill ${
              map == "mira" ? "border border-primary" : ""
            }`}
            src="assets/Mira_HQ.png"
            alt="Mira HQ"
            fluid
            onClick={() => setMap("mira")}
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <Image
            className={`map-name rounded-pill ${
              map == "polus" ? "border border-primary" : ""
            }`}
            src="assets/Polus_Map.png"
            alt="Polus"
            fluid
            onClick={() => setMap("polus")}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Draggable position={{ x: 0, y: 0 }} disabled>
            <Image
              src={`assets/${
                map == "skeld" ? "TheSkeld" : map == "mira" ? "Mirahq" : "Polus"
              }.png`}
              fluid
            />
          </Draggable>

          {players.map((player) => (
            <Draggable key={player}>
              <Image src={`assets/${player}.png`} />
            </Draggable>
          ))}
        </Col>
      </Row>
    </React.Fragment>
  );
}
