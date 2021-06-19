import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Container, Row, Col, Alert } from "react-bootstrap";
import SearchByDistrict from "./searchByDistrict";

const ShowDistrictCode = () => {
  const [districts, setDistricts] = useState([]);
  const [distId, setDistID] = useState();
  const [distName, setDistName] = useState("Select District");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_COWIN_BASE_URL}v2/admin/location/districts/26`)
      .then((res) => {
        setDistricts(res.data.districts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const distClickHandler = (district) => {
    setDistID(district.district_id);
    setDistName(district.district_name);
  };

  return (
    <>
      <Container className="pl-0">
        <Row>
          <Col sm={11} className="ml-0 pl-0">
            {distId ? (
              <SearchByDistrict distId={distId} />
            ) : (
              <Alert variant="success" className="mt-5">
                Namaste! Please select a District to check vaccine Availability&nbsp;or view the&nbsp;
                <Alert.Link href="/statistics">Covid Statics</Alert.Link>.
              </Alert>
            )}
          </Col>
          <Col sm={1} className="mt-5">
            <Dropdown
              style={{
                whiteSpace: "nowrap",
                position: "sticky",
                top: "20px",
                backgroundColor: "white",
              }}
            >
              <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                <b>{distName}</b>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {districts.map((district) => (
                  <Dropdown.Item onClick={() => distClickHandler(district)}>
                    {district.district_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowDistrictCode;
