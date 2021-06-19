import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MessageBox from "./messageBox";
import DropdownSelect from './dropdownSelect';

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
            <MessageBox distId={distId} />
          </Col>
          <Col sm={1} className="mt-5">
            <DropdownSelect distClickHandler={distClickHandler} distName={distName} districts={districts}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowDistrictCode;
