import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageBreadCrumb from "../../components/PageBreadCrumb/PageBreadCrumb";
import "./Product.css";
import img1 from "../../assets/images/image.png";
import product from "../../dummy-data.json";
import { useParams } from "react-router-dom";
const Product = () => {
  console.log("====================================");
  console.log(product);
  console.log("====================================");
  const [products, setProducts] = useState("");
  const { pId } = useParams();

  useEffect(() => {
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == pId) {
        setProducts(product[i]);
        continue;
      }
    }
  }, [pId]);
  console.log("====================================");
  console.log(products);
  console.log("====================================");
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Product " />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Product</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {pId}
          {products ? (
            <div className="product-items" key={products.id}>
              <div className="productImg">
                <img src={img1} alt="" />
              </div>
              <div className="product-desc">
                <p>{products.product_name}</p>
                <p>{products.product_code}</p>
                <p>{products.product_description}</p>
                <p>{products.product_unit_price}</p>
              </div>
            </div>
          ) : (
            <h4>there is no product</h4>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
