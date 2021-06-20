import React, { useState } from "react";
import axios from "axios";
import MobileNoCard from "./mobileNoCard";
import OtpBox from "./otpBox";
import { Card, InputGroup, FormControl, Button, Alert } from "react-bootstrap";
import RefCard from "./refCard";

const DownloadCert = () => {
  const [mobileNo, setMobileNo] = useState("Registered Mobile No.");
  const [otpTxnId, setOtpTxnId] = useState("");
  const [sentOtp, setSentOtp] = useState("Please enter the OTP");
  const [otpToken, setOtpToken] = useState("");
  const [errCode, setErrCode] = useState(false);
  const [referenceId, setReferenceId] = useState("Please enter reference ID");

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
    responseType: "arraybuffer"
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
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = `${referenceId}`;
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
      <MobileNoCard mobileNo={mobileNo} mobileNoChangeHandler={mobileNoChangeHandler} sendOtpHandler={sendOtpHandler} />
      {otpTxnId !== "" && (
        <OtpBox sentOtp={sentOtp} otpChangeHandler={otpChangeHandler} confirmOtpHandler={confirmOtpHandler} />
      )}
      {otpToken &&
        <RefCard referenceId={referenceId} refIdChangeHandler={refIdChangeHandler} certDownloadHandler={certDownloadHandler} />
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

export default DownloadCert;
