import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Container, Row, Col } from "react-bootstrap";

const DropdownSelect = (props) => {
  return (
    <>
      <Dropdown
        pre-scrollable
        style={{
          whiteSpace: "nowrap",
          position: "sticky",
          top: "20px",
          backgroundColor: "white",
        }}
      >
        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
          <b>{props.distName}</b>
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ height: "auto", maxHeight: "610px", overflowX: "hidden" }}
        >
          {props.districts.map((district) => (
            <Dropdown.Item onClick={() => props.distClickHandler(district)}>
              {district.district_name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownSelect;
