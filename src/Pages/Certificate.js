import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DownloadCert from "../components/downloadCert";

const Certificate = () => {
  return (
    <>
      <Container className="mt-3 pt-5">
        <Row className="mt-5 pt-5">
          <Col></Col>
          <Col xs={5}>
            <DownloadCert />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Certificate;
