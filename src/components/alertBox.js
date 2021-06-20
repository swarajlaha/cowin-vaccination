import React, { useState } from "react";
import axios from "axios";
import MobileNoCard from "./mobileNoCard";
import OtpBox from "./otpBox";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";
import RefCard from "./refCard";

const AlertBox = (props) => {

  return (
    <>
      {
        props.alertCode === "1" ? (
          <Alert variant="success">
            OTP sent successfully! Valid for 3 minutes.
          </Alert>
        ) : (props.alertCode === "2" ? (
          <Alert variant="success">
            OTP validated successfully.
          </Alert>
        ) : (props.alertCode === "3") ? (
          <Alert variant="success">
            Certificate downloaded successfully.
          </Alert>
        ) : (props.alertCode === "4") ? (
          <Alert variant="danger">
            OTP could not be sent. Please verify mobile no.
          </Alert>
        ) : (props.alertCode === "5") ? (
          <Alert variant="danger">
            OTP invalid or mobile no not registered.
          </Alert>
        ) : (props.alertCode === "6") ? (
          <Alert variant="danger">
            Sorry! Certificate could not be downloaded.
          </Alert>
        ) : (""))
      }
    </>
  );
};

export default AlertBox;
