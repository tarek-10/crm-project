import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/PageBreadCrumb/PageBreadCrumb";
import ProductTble from "../../components/ProductTable/ProductTble";
import SearchForm from "../../components/SearchForm/SearchForm.comp";
import product from "../../dummy-data.json";
const ProductList = () => {
  const [str, setStr] = useState("");
  const [displayProduct, setDisplayProduct] = useState(product);
  useEffect(() => {}, [str, displayProduct]);

  const handleOnChange = (e) => {
    let { value } = e.target;
    setStr(value);
    searchProducts(value);
  };
  const searchProducts = (str) => {
    const displayProducts = product.filter((row) =>
      row.product_name.toLowerCase().includes(str.toLowerCase())
    );
    setDisplayProduct(displayProducts);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Product List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Product</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <ProductTble product={displayProduct} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
