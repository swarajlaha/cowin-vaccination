import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const MobileNoCard = (props) => {
  return (
    <>
      <div className="pt-4">
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
    </>
  );
};

export default MobileNoCard;
