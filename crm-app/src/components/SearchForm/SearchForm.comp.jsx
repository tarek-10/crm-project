import React from "react";
import { Form, Row, Col } from "react-bootstrap";
const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Search
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Search ...!"
              name="searchStr"
              onChange={handleOnChange}
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
