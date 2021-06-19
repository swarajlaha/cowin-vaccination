import React, { useState } from "react";
import axios from "axios";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const OtpBox = () => {
  const [mobileNo, setMobileNo] = useState("Registered Mobile No.");
  const [otpTxnId, setOtpTxnId] = useState("");
  const [sentOtp, setSentOtp] = useState("Please enter the OTP");
  const [otpToken, setOtpToken] = useState("");
  const [errCode, setErrCode] = useState(false);
  const [referenceId, setReferenceId] = useState("Please enter reference ID");
  const [downlaodURL, setDownloadURL] = useState("");

  var crypto = require("crypto");

  const mobileNoChangeHandler = (e) => {
    setMobileNo(String(e.target.value));
  };

  let generateOTPReqBody = {
    mobile: mobileNo,
  };

  const sendOtpHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_COWIN_BASE_URL}v2/auth/public/generateOTP`,
        generateOTPReqBody
      )
      .then((res) => {
        console.log("sent", res);
        setOtpTxnId(String(res.data.txnId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const otpChangeHandler = (e) => {
    setSentOtp(String(e.target.value));
  };

  var otpSha256 = crypto.createHash("sha256").update(sentOtp).digest("hex");

  let confirmOTPReqBody = {
    otp: otpSha256,
    txnId: otpTxnId,
  };

  const confirmOtpHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_COWIN_BASE_URL}v2/auth/public/confirmOTP`,
        confirmOTPReqBody
      )
      .then((res) => {
        console.log("success", res);
        setOtpToken(String(res.data.token));
      })
      .catch((err) => {
        console.log(err);
        setErrCode(true);
      });
  };

  const refIdChangeHandler = (e) => {
    setReferenceId(String(e.target.value));
  };

  const config = {
    headers: { Authorization: `Bearer ${otpToken}` },
  };

  const certDownloadHandler = () => {
    axios
      .get(
        `${process.env.REACT_APP_COWIN_BASE_URL}v2/registration/certificate/public/download?beneficiary_reference_id=${referenceId}`,
        config, { responseType: "blob" }
      )
      .then((res) => {
        console.log("referenceId", referenceId);
        console.log("success", res);
        setDownloadURL(res.config.url);
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "certificate";
        link.click();
      })
      .catch((err) => {
        console.log(err);
        setErrCode(true);
      });
  };

  console.log(otpToken);

  return (
    <>
      {otpTxnId && !otpToken && sentOtp && !errCode && (
        <Alert variant="success">
          OTP sent successfully! Valid for 3 minutes.
        </Alert>
      )}
      <Card>
        <Card.Header>Download Certificate</Card.Header>
        <Card.Body>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>+91</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder={mobileNo}
                aria-label="Mobile No."
                onChange={(e) => mobileNoChangeHandler(e)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={sendOtpHandler}>
                  Send OTP
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Card.Body>
      </Card>
      {otpTxnId !== "" && (
        <>
          <Card className="mt-3">
            <Card.Header>Enter OTP</Card.Header>
            <Card.Body>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend></InputGroup.Prepend>
                  <FormControl
                    placeholder={sentOtp}
                    aria-label="otp"
                    onChange={(e) => otpChangeHandler(e)}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={confirmOtpHandler}
                    >
                      Submit
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
      {otpToken &&
        <>
          <Card className="mt-3">
            <Card.Header>Reference ID</Card.Header>
            <Card.Body>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend></InputGroup.Prepend>
                  <FormControl
                    placeholder={referenceId}
                    aria-label="otp"
                    onChange={(e) => refIdChangeHandler(e)}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      onClick={certDownloadHandler}
                    >
                      Download
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </>
      }
      {otpToken && <Alert variant="success">Verified!</Alert>}
      {errCode && (
        <Alert variant="danger">
          Mobile no. is not registered or invalid OTP
        </Alert>
      )}
    </>
  );
};

export default OtpBox;