import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./PageBreadCrumb.css";
const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb className="breadCrumbStyle">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PageBreadCrumb;
