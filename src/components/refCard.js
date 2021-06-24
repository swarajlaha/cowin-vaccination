import React from "react";
import { InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const RefCard = (props) => {
  return (
    <>
      <div className="pt-4 zoomeffect">
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
              style={{boxShadow: "2px 3px 5px #888888"}}
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
