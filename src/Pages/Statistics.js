import React from "react";
import WorldStats from "../components/worldStats";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import IndiaStats from "../components/indiaStats";

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
