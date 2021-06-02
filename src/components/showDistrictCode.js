import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Check district ID
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="primary" onClick={handleShow}>
          District ID
        </Button>
      </OverlayTrigger>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {districts.map((district) => (
            <li key={district.district_id}>
              {district.district_name} - {district.district_id}
            </li>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowDistrictCode;
