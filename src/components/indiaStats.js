import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
  Table,
} from "react-bootstrap";

const IndiaStats = () => {
  const [sites, setSites] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [vaccination, setVaccination] = useState([]);
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_COWIN_BASE_URL}v1/reports/v2/getPublicReports?state_id=&district_id=&date=`
      )
      .then((res) => {
        let resData = res.data;
        setSites(resData.topBlock.sites);
        setRegistration(resData.topBlock.registration);
        setVaccination(resData.topBlock.vaccination);
        setStatesData(resData.getBeneficiariesGroupBy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card className="ml-5 mr-5 mt-5">
          <div
            style={{ height: "auto", maxHeight: "650px", overflowX: "hidden" }}
          >
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              INDIA
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Sites
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total: {sites.total}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Govt: {sites.govt}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Pvt: {sites.pvt}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Registrations
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Age 18+: {registration.cit_18_45}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Age 45+: {registration.cit_45_above}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today: {registration.today}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Total: {registration.total}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Doses
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total Doses: {vaccination.total_doses}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose1: {vaccination.tot_dose_1}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose2: {vaccination.tot_dose_2}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today: {vaccination.today}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Vaccine Types
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Covaxin: {vaccination.covaxin}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Covishield: {vaccination.covishield}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Sputnik: {vaccination.sputnik}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Today
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total: {vaccination.today}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 1: {vaccination.today_dose_one}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 2: {vaccination.today_dose_two}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Female: {vaccination.today_female}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Male: {vaccination.today_male}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Others: {vaccination.today_others}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>State</th>
                            <th>Total Vaccinated</th>
                            <th>Only 1 Dose</th>
                            <th>Both Doses</th>
                            <th>Today</th>
                          </tr>
                        </thead>
                        <tbody>
                          {statesData.map((stateData) => (
                            <tr>
                              <td>{stateData.state_name}</td>
                              <td>{stateData.total}</td>
                              <td>{stateData.partial_vaccinated}</td>
                              <td>{stateData.totally_vaccinated}</td>
                              <td>{stateData.today}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
      </Accordion>
    </>
  );
};

export default IndiaStats;
