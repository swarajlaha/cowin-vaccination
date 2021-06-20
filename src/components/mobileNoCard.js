import React, { useState } from "react";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const MobileNoCard = (props) => {
  return (
    <>
      <Card>
        <Card.Header>Download Certificate</Card.Header>
        <Card.Body>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>+91</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={props.mobileNo}
                aria-label="Mobile No."
                onChange={(e) => props.mobileNoChangeHandler(e)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={props.sendOtpHandler}>
                  Send OTP
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MobileNoCard;
