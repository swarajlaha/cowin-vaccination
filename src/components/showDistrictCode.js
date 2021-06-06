import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, Dropdown } from "react-bootstrap";

const ShowDistrictCode = () => {
  const [districts, setDistricts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select District
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {districts.map((district) => <Dropdown.Item href="#/action-3">{district.district_name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ShowDistrictCode;
