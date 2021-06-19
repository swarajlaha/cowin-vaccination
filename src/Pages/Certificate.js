import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
  Alert
} from "react-bootstrap";
import OtpBox from "../components/otpBox";

const Certificate = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="mt-5 pt-5">
          <Col></Col>
          <Col xs={5}>
            <OtpBox />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Certificate;
