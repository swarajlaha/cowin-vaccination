import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">COWIN VACCINATION</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Availability</Nav.Link>
          <Nav.Link href="/statistics">Statistics</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default AppNavbar;
