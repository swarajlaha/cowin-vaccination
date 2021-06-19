import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className="ml-5">COWIN VACCINATION</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Availability</Nav.Link>
          <Nav.Link href="/statistics">Statistics</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end mr-5">
          <Navbar.Text>
          Please visit <a href="https://www.cowin.gov.in/home" target="_blank">CoWIN</a> for all services.
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNav;
