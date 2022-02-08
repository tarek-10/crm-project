import React from "react";
import "./NewOrder.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductTble from "../ProductTable/ProductTble";
import ourProduct from "../../dummy-data.json";
import PageBreadCrumb from "../PageBreadCrumb/PageBreadCrumb";
const NewOrder = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Order" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center ">
          <Button variant="info" className="btn-newOrder mt-5 mb-2">
            Add New Order
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Order: 15</div>
          <div>Pending Order: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2">
          <div>Recently Added Products</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2">
          <div className="recent-tickets">
            <ProductTble product={ourProduct} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewOrder;
