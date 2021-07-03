import React from 'react';
import { Form, Button, Badge } from 'react-bootstrap';

const CheckBoxes = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log('Form')
  }
  return (
    <>
      <Form onSubmit={(e) => formSubmitHandler(e)}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={
                    <Badge pill variant="danger">
                      18+
                    </Badge>
                  }
                />
                <Form.Check
                  type="checkbox"
                  label={
                    <Badge pill variant="info">
                      45+
                    </Badge>
                  }
                  onClick={() => console.log('45+')}
                />
                <Form.Check
                  type="checkbox"
                  label={<Badge variant="success">Covishield</Badge>}
                />
                <Form.Check
                  type="checkbox"
                  label={<Badge variant="primary">Covaxin</Badge>}
                />
                <Form.Check
                  type="checkbox"
                  label={<Badge variant="warning">Sputnik</Badge>}
                />
                <Form.Check
                  type="checkbox"
                  label={<Badge variant="light">Free</Badge>}
                />
                <Form.Check
                  type="checkbox"
                  label={<Badge variant="danger">Paid</Badge>}
                />
              </Form.Group>
              <Button type='submit' variant="outline-success">Search</Button>
            </Form>
    </>
  );
};

export default CheckBoxes;