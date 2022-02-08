import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import PageBreadCrumb from "../../components/PageBreadCrumb/PageBreadCrumb";
const inialFromData = {
  code: "",
  names: "",
  description: "",
  unitPrice: "",
  unit: "",
};
const AddNewProduct = () => {
  const [formData, setFromData] = useState(inialFromData);
  useEffect(() => {}, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
    console.log("====================================");
    console.log(name, value);
    console.log("====================================");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log("from submit", formData);
    console.log("====================================");
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="AddNewProduct" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddProductForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={FormData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewProduct;
