import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="ml-3 mr-3" style={{boxShadow: "2px 3px 5px #888888"}}>
        <Navbar.Brand href="/" className="ml-5 zoomeffect">COWIN VACCINATION</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="zoomeffect" href="/">Availability</Nav.Link>
          <Nav.Link className="zoomeffect" href="/statistics">Statistics</Nav.Link>
          <Nav.Link className="zoomeffect" href="/certificate">Certificate</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end mr-5">
          <Navbar.Text className="zoomeffect">
          Please visit <a href="https://www.cowin.gov.in/home" target="_blank">CoWIN</a> for all services.
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNav;
