import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = ({ handleChange, handleSubmit, email, password }) => {
  return (
    <>
      <div className="loginWrapper bg-info">
        <div className="LoginBox">
          <form className="w-100" autoComplete="off" onSubmit={handleSubmit}>
            <input
              name="email"
              placeholder="Email"
              className="loginInput w-100 my-3"
              onChange={handleChange}
              value={email}
            />
            <input
              name="password"
              placeholder="Password"
              className="loginInput w-100 my-3"
              onChange={handleChange}
              value={password}
            />
            <button className="loginButton w-100">Log In</button>
            <Link to="/resetpassword">
              <span className="loginForgot d-block my-2">Forgot Password?</span>
            </Link>
            <Link to="/register">
              <button className="loginRegisterButton w-100 ">
                Create a new Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
