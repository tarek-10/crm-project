import React, { useState } from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import DefaultLayout from "./components/Layout/DefaultLayout";
import "./App.css";
import NewOrder from "./components/NewOrder/NewOrder";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("You Missed Email Or Password  ");

      // here calling api
    }
  };

  const handleResOnSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please Enter Your Email...!");
    }
    //here call api
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              email={email}
              password={password}
            />
          }
        />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route
          path="/register"
          element={
            <Register
              handleChange={handleChange}
              email={email}
              password={password}
              handleResOnSubmit={handleResOnSubmit}
            />
          }
        />
        <Route
          path="/home"
          element={
            <DefaultLayout>
              <NewOrder />
            </DefaultLayout>
          }
        />
        <Route
          path="/product/:pId"
          element={
            <DefaultLayout>
              <Product />
            </DefaultLayout>
          }
        />
        <Route
          path="/"
          element={
            <DefaultLayout>
              <NewOrder />
            </DefaultLayout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <DefaultLayout>
              <AddNewProduct />
            </DefaultLayout>
          }
        />
        <Route
          path="/productlist"
          element={
            <DefaultLayout>
              <ProductList />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
