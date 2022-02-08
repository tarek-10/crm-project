import React from "react";
import "./ProductTable.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductTble = ({ product }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product id:</th>
          <th>Product code:</th>
          <th>product name:</th>
          <th>product description:</th>
          <th>product unit price</th>
          <th>product unit</th>
        </tr>
      </thead>
      <tbody>
        {product.length ? (
          product.map((row) => (
            <tr key={row.id}>
              <th>#</th>
              <th>{row.id}</th>
              <th>{row.product_code}</th>
              <th>
                <Link to={`/product/${row.id}`}>{row.product_name}</Link>
              </th>
              <th>{row.product_description}</th>
              <th>{row.product_unit_price}</th>
              <th>{row.product_unit}</th>
            </tr>
          ))
        ) : (
          <tr className="text-center ">
            <h1>There is no products</h1>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ProductTble;
