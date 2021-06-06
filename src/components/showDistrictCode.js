import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import SearchByDistrict from "./searchByDistrict";

const ShowDistrictCode = () => {
  const [districts, setDistricts] = useState([]);
  const [distId, setDistID] = useState();
  const [distName, setDistName] = useState("Select District");

  useEffect(() => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/26`)
      .then((res) => {
        setDistricts(res.data.districts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container className="pl-0">
        <Row>
          <Col sm={11} className="ml-0 pl-0">
            <SearchByDistrict distId={distId} />
          </Col>
          <Col sm={1} className="mt-5">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {distName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {districts.map((district) => (
                  <Dropdown.Item
                    onClick={() => setDistID(district.district_id)}
                  >
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
