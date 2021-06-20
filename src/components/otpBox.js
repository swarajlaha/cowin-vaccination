import React, { useState } from "react";
import axios from "axios";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const OtpBox = (props) => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>Enter OTP</Card.Header>
        <Card.Body>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend></InputGroup.Prepend>
              <FormControl
                placeholder={props.sentOtp}
                aria-label="otp"
                onChange={(e) => props.otpChangeHandler(e)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={props.confirmOtpHandler}>
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OtpBox;
