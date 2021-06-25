import React, { useState } from "react";
import axios from "axios";
import MobileNoCard from "./mobileNoCard";
import OtpBox from "./otpBox";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { RiInformationLine } from "react-icons/ri";
import RefCard from "./refCard";
import AlertBox from "./alertBox";

const DownloadCert = () => {
  const [mobileNo, setMobileNo] = useState("Registered Mobile No.");
  const [otpTxnId, setOtpTxnId] = useState("");
  const [sentOtp, setSentOtp] = useState("Please enter the OTP");
  const [otpToken, setOtpToken] = useState("");
  const [alertCode, setAlertCode] = useState("");
  const [referenceId, setReferenceId] = useState("Please enter reference ID");

  var crypto = require("crypto");

  const mobileNoChangeHandler = (e) => {
    setMobileNo(String(e.target.value));
  };

  let generateOTPReqBody = {
    mobile: mobileNo,
  };

  const sendOtpHandler = () => {
    if (mobileNo.length === 10) {
      axios
        .post(
          `${process.env.REACT_APP_COWIN_BASE_URL}v2/auth/public/generateOTP`,
          generateOTPReqBody
        )
        .then((res) => {
          setOtpTxnId(String(res.data.txnId));
          setAlertCode("1");
        })
        .catch((err) => {
          console.log(err);
          setAlertCode("4");
        });
    } else {
      setAlertCode("7");
    }
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
        setOtpToken(String(res.data.token));
        setAlertCode("2");
      })
      .catch((err) => {
        console.log(err);
        setAlertCode("5");
      });
  };

  const refIdChangeHandler = (e) => {
    setReferenceId(String(e.target.value));
  };

  const config = {
    headers: { Authorization: `Bearer ${otpToken}` },
    responseType: "arraybuffer",
  };

  const certDownloadHandler = () => {
    axios
      .get(
        `${process.env.REACT_APP_COWIN_BASE_URL}v2/registration/certificate/public/download?beneficiary_reference_id=${referenceId}`,
        config,
        { responseType: "blob" }
      )
      .then((res) => {
        setAlertCode("3");
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = `${referenceId}`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
        setAlertCode("6");
      });
  };

  return (
    <>
      <AlertBox alertCode={alertCode} mobileNo={mobileNo} />
      <Card style={{boxShadow: "2px 3px 5px #888888"}} className="slideinanimation">
        <Card.Header style={{boxShadow: "2px 3px 5px #888888"}}>
          <b>Download Certificate</b>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id={`tooltip-right`} style={{ opacity: "0.6" }}>
                Enter you registered mobile no., verify OTP and download the
                vaccine certificate.
              </Tooltip>
            }
          >
            <Button className="pt-0" variant="light">
              <RiInformationLine />
            </Button>
          </OverlayTrigger>
        </Card.Header>
        <Card.Body>
          <MobileNoCard
            mobileNo={mobileNo}
            mobileNoChangeHandler={mobileNoChangeHandler}
            sendOtpHandler={sendOtpHandler}
          />
          {otpTxnId !== "" && (
            <OtpBox
              sentOtp={sentOtp}
              otpChangeHandler={otpChangeHandler}
              confirmOtpHandler={confirmOtpHandler}
            />
          )}
          {otpToken && (
            <RefCard
              referenceId={referenceId}
              refIdChangeHandler={refIdChangeHandler}
              certDownloadHandler={certDownloadHandler}
            />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default DownloadCert;
