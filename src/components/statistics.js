import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Statistics = () => {
  const [sites, setSites] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [vaccination, setVaccination] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=`
      )
      .then((res) => {
        let resData = res.data;
        console.log(resData.topBlock.vaccination);
        setSites(resData.topBlock.sites);
        setRegistration(resData.topBlock.registration);
        setVaccination(resData.topBlock.vaccination);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <Card.Header>Vaccination Sites</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Total: {sites.total}</ListGroup.Item>
                <ListGroup.Item>Govt: {sites.govt}</ListGroup.Item>
                <ListGroup.Item>Pvt: {sites.pvt}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Registrations</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Age 18+: {registration.cit_18_45} | Age 45+: {registration.cit_45_above}</ListGroup.Item>
                <ListGroup.Item>Today: {registration.today}</ListGroup.Item>
                <ListGroup.Item>Total: {registration.total}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default Statistics;
