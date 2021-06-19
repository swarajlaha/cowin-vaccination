import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import SearchByDistrict from "./searchByDistrict";

const MessageBox = (props) => {

  return (
    <>
      <Container className="pl-0">
        <Row>
          <Col sm={11} className="ml-0 pl-0">
            {props.distId ? (
              <SearchByDistrict distId={props.distId} />
            ) : (
              <Alert variant="success" className="mt-5">
                Namaste! Please select a District to check vaccine Availability&nbsp;or view the&nbsp;
                <Alert.Link href="/statistics">Covid Statics</Alert.Link>.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MessageBox;
