import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiInformationLine,
} from "react-icons/ri";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Accordion,
  Table,
  OverlayTrigger,
  Tooltip,
  Button,
  Badge,
} from "react-bootstrap";

const IndiaStats = () => {
  const [sites, setSites] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [vaccination, setVaccination] = useState([]);
  const [statesData, setStatesData] = useState([]);
  const [accordionState, setAccordionState] = useState(false);

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

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Accordion defaultActiveKey="0" className="slideinanimation">
        <Card
          className="ml-5 mr-5 mt-5"
          style={{ boxShadow: "2px 3px 5px #888888" }}
        >
          <div
            className="scrollbarstyle style-2"
            style={{ height: "auto", maxHeight: "650px", overflowX: "hidden" }}
          >
            <Accordion.Toggle
              as={Card.Header}
              variant="link"
              eventKey="1"
              onClick={() => {
                setAccordionState(!accordionState);
              }}
            >
              <b>
                INDIA{" "}
                {accordionState ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </b>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Accordion className="zoomeffect" defaultActiveKey="0">
                        <Card style={{ boxShadow: "2px 3px 5px #888888" }}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Sites
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  Total public and private health facilities
                                  conducting vaccination today.
                                </Tooltip>
                              }
                            >
                              <Button className="pt-0" variant="light">
                                <RiInformationLine />
                              </Button>
                            </OverlayTrigger>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total:{" "}
                                  <Badge variant="light">
                                    {numberWithCommas(sites.total)}
                                  </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Govt:{" "}
                                  <Badge variant="light">
                                    {numberWithCommas(sites.govt)}
                                  </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Pvt:{" "}
                                  <Badge variant="light">
                                    {numberWithCommas(sites.pvt)}
                                  </Badge>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion className="zoomeffect" defaultActiveKey="0">
                        <Card style={{ boxShadow: "2px 3px 5px #888888" }}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Registrations
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  Total number of beneficiaries registered till
                                  date.
                                </Tooltip>
                              }
                            >
                              <Button className="pt-0" variant="light">
                                <RiInformationLine />
                              </Button>
                            </OverlayTrigger>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Age 18+:
                                  <Badge variant="light">
                                    {numberWithCommas(registration.cit_18_45)}
                                  </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Age 45+:
                                  <Badge variant="light">
                                    {numberWithCommas(
                                      registration.cit_45_above
                                    )}
                                  </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today:{" "}
                                  <Badge variant="light">
                                    {numberWithCommas(registration.today)}
                                  </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Total:{" "}
                                  <Badge variant="light">
                                    {numberWithCommas(registration.total)}
                                  </Badge>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion className="zoomeffect" defaultActiveKey="0">
                        <Card style={{ boxShadow: "2px 3px 5px #888888" }}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Doses
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  Total number of vaccine doses till date.
                                </Tooltip>
                              }
                            >
                              <Button className="pt-0" variant="light">
                                <RiInformationLine />
                              </Button>
                            </OverlayTrigger>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total:
                                  <Badge variant="light">{numberWithCommas(vaccination.total_doses)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose1:
                                  <Badge variant="light">{numberWithCommas(vaccination.tot_dose_1)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose2:
                                  <Badge variant="light">{numberWithCommas(vaccination.tot_dose_2)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today: <Badge variant="light">{numberWithCommas(vaccination.today)}</Badge>
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
                      <Accordion className="zoomeffect" defaultActiveKey="0">
                        <Card style={{ boxShadow: "2px 3px 5px #888888" }}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Vaccine Types
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  No. of doses of each type of vaccines
                                  administered till date.
                                </Tooltip>
                              }
                            >
                              <Button className="pt-0" variant="light">
                                <RiInformationLine />
                              </Button>
                            </OverlayTrigger>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Covaxin:
                                  <Badge variant="light">{numberWithCommas(vaccination.covaxin)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Covishield:
                                  <Badge variant="light">{numberWithCommas(vaccination.covishield)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Sputnik:
                                  <Badge variant="light">{numberWithCommas(vaccination.sputnik)}</Badge>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion className="zoomeffect" defaultActiveKey="0">
                        <Card style={{ boxShadow: "2px 3px 5px #888888" }}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Today
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  No. of vaccines administered today.
                                </Tooltip>
                              }
                            >
                              <Button className="pt-0" variant="light">
                                <RiInformationLine />
                              </Button>
                            </OverlayTrigger>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Total: <Badge variant="light">{numberWithCommas(vaccination.today)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 1:
                                  <Badge variant="light">{numberWithCommas(vaccination.today_dose_one)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 2:
                                  <Badge variant="light">{numberWithCommas(vaccination.today_dose_two)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Female:
                                  <Badge variant="light">{numberWithCommas(vaccination.today_female)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Male:
                                  <Badge variant="light">{numberWithCommas(vaccination.today_male)}</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Others:
                                  <Badge variant="light">{numberWithCommas(vaccination.today_others)}</Badge>
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
                      <Table
                        bordered
                        hover
                        style={{ boxShadow: "2px 3px 5px #888888" }}
                      >
                        <thead style={{ boxShadow: "2px 3px 5px #888888" }}>
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
                              <td>
                                <Badge variant="light">
                                  {numberWithCommas(stateData.total)}
                                </Badge>
                              </td>
                              <td>
                                <Badge variant="light">
                                  {numberWithCommas(
                                    stateData.partial_vaccinated
                                  )}
                                </Badge>
                              </td>
                              <td>
                                <Badge variant="light">
                                  {numberWithCommas(
                                    stateData.totally_vaccinated
                                  )}
                                </Badge>
                              </td>
                              <td>
                                <Badge variant="light">
                                  {numberWithCommas(stateData.today)}
                                </Badge>
                              </td>
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
