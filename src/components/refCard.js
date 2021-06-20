import React, { useState } from "react";
import axios from "axios";
import MobileNoCard from "./mobileNoCard";
import OtpBox from "./otpBox";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const RefCard = (props) => {
  return (
    <>
      <div className="pt-4">
        <InputGroup className="mb-3">
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            placeholder={props.referenceId}
            aria-label="otp"
            onChange={(e) => props.refIdChangeHandler(e)}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={props.certDownloadHandler}
            >
              Download
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </>
  );
};

export default RefCard;
