import { Col, Form, Image, Row } from "react-bootstrap";

import React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps): JSX.Element {
  return (
    <React.Fragment>
      <Row>
        <Col xs="2" className="px-1 py-2">
          <Image src="assets/amongNotes.gif" alt="Notes logo" fluid />
        </Col>
        <Col className="px-1 d-flex justify-content-center align-items-center">
          <h1 className="h2">
            <Form.Control id="title" type="text" defaultValue="fusliez notes" />
          </h1>
        </Col>
        <Col xs="2" className="px-1 py-2">
          <Image src="assets/amongNotes.gif" alt="Notes logo" fluid />
        </Col>
      </Row>
    </React.Fragment>
  );
}
