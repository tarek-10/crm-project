import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/images/crm.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
        <Navbar.Brand>
          <img src={img1} alt="logo" className="navbarBrandImg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/login">
              <NavLink to="/login" className="navLink">
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link href="/register">
              <NavLink to="/register" className="navLink">
                Register
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/home" className="navLink">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/addproduct" className="navLink">
                Add Product
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/productlist" className="navLink">
                Product List
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/login" className="navLink">
                Logout
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
