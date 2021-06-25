import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import "../styles/style.css";

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
        className="slideinanimation"
      >
        <Dropdown.Toggle className="zoomeffect" variant="outline-success" id="dropdown-basic" style={{boxShadow: "5px 5px 8px #888888"}}>
          <b>{props.distName}</b>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="scrollbarstyle style-2"
          style={{ height: "auto", maxHeight: "645px", overflowX: "hidden", boxShadow: "5px 5px 8px #888888" }}
        >
          {props.districts.map((district) => (
            <Dropdown.Item className="zoomeffect" onClick={() => props.distClickHandler(district)}>
              {district.district_name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownSelect;
