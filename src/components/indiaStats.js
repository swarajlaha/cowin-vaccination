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
      <Accordion defaultActiveKey="0">
        <Card className="ml-5 mr-5 mt-5" style={{boxShadow: "2px 3px 5px #888888"}}>
          <div
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
                      <Accordion defaultActiveKey="0">
                        <Card style={{boxShadow: "2px 3px 5px #888888"}}>
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
                                  Total: {numberWithCommas(sites.total)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Govt: {numberWithCommas(sites.govt)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Pvt: {numberWithCommas(sites.pvt)}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card style={{boxShadow: "2px 3px 5px #888888"}}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Registrations
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  Total number of beneficiaries registered till date.
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
                                  Age 18+:{" "}
                                  {numberWithCommas(registration.cit_18_45)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Age 45+:{" "}
                                  {numberWithCommas(registration.cit_45_above)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today: {numberWithCommas(registration.today)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Total: {numberWithCommas(registration.total)}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card style={{boxShadow: "2px 3px 5px #888888"}}>
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
                                  Total Doses:{" "}
                                  {numberWithCommas(vaccination.total_doses)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose1:{" "}
                                  {numberWithCommas(vaccination.tot_dose_1)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose2:{" "}
                                  {numberWithCommas(vaccination.tot_dose_2)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Today: {numberWithCommas(vaccination.today)}
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
                        <Card style={{boxShadow: "2px 3px 5px #888888"}}>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            Vaccine Types
                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip
                                  id={`tooltip-right`}
                                  style={{ opacity: "0.6" }}
                                >
                                  No. of doses of each type of vaccines administered till date.
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
                                  Covaxin:{" "}
                                  {numberWithCommas(vaccination.covaxin)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Covishield:{" "}
                                  {numberWithCommas(vaccination.covishield)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Sputnik:{" "}
                                  {numberWithCommas(vaccination.sputnik)}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                    <Col>
                      <Accordion defaultActiveKey="0">
                        <Card style={{boxShadow: "2px 3px 5px #888888"}}>
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
                                  Total: {numberWithCommas(vaccination.today)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 1:{" "}
                                  {numberWithCommas(vaccination.today_dose_one)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Dose 2:{" "}
                                  {numberWithCommas(vaccination.today_dose_two)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Female:{" "}
                                  {numberWithCommas(vaccination.today_female)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Male:{" "}
                                  {numberWithCommas(vaccination.today_male)}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Others:{" "}
                                  {numberWithCommas(vaccination.today_others)}
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
                      <Table striped bordered hover style={{boxShadow: "2px 3px 5px #888888"}}>
                        <thead style={{boxShadow: "2px 3px 5px #888888"}}>
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
                              <td>{numberWithCommas(stateData.total)}</td>
                              <td>
                                {numberWithCommas(stateData.partial_vaccinated)}
                              </td>
                              <td>
                                {numberWithCommas(stateData.totally_vaccinated)}
                              </td>
                              <td>{numberWithCommas(stateData.today)}</td>
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
