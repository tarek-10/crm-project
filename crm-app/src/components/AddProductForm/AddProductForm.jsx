import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./AddProductForm.css";
const AddProductForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="formDiv">
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mt-3 ml-2 mr-2 mb-2">
          <Form.Label column sm={3}>
            Product Code
          </Form.Label>
          <Col sm={9} className="mt-2">
            <Form.Control
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Enter Product Code"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-4 mb-4 ml-2 mr-2">
          <Form.Label column sm={3}>
            Product name
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="names"
              value={formData.names}
              onChange={handleChange}
              placeholder="Enter Product name"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-2">
          <Form.Label column sm={3}>
            Product description
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Product description"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-2">
          <Form.Label column sm={3}>
            Product unit price
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              placeholder="Enter Product unit price"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-2">
          <Form.Label column sm={3}>
            Product unit
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              placeholder="Enter Product unit "
              required
            />
          </Col>
        </Form.Group>

        <Button variant="info" type="submit" className="d-block w-100 mt-4">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
