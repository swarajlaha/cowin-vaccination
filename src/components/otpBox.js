import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const OtpBox = (props) => {
  return (
    <>
      <div className="pt-4 zoomeffect">
        <InputGroup className="mb-3">
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            placeholder={props.sentOtp}
            aria-label="otp"
            onChange={(e) => props.otpChangeHandler(e)}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={props.confirmOtpHandler}
              style={{boxShadow: "2px 3px 5px #888888"}}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </>
  );
};

export default OtpBox;
