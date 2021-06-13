import React, { useState, useEffect } from "react";
import WorldStats from "./worldStats";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
  Table,
} from "react-bootstrap";
import IndiaStats from "./indiaStats";

const Statistics = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs lg="2">
            <WorldStats />
          </Col>
          <Col>
            <IndiaStats />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Statistics;
