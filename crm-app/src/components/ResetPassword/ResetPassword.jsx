import React from "react";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
const ResetPassword = ({
  handleChange,
  handleResOnSubmit,
  email,
  password,
}) => {
  return (
    <>
      <div className="resetPasswordWrapper bg-info">
        <div className="fromBox">
          <form autoComplete="off" onSubmit={handleResOnSubmit}>
            <h4 className="resetTitle">Reset password</h4>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="fromInput w-100 my-3"
              onChange={handleChange}
              value={email}
            />
            <input
              type="password"
              placeholder="Enter Your Old Password"
              className="fromInput w-100 my-3"
              onChange={handleChange}
              value={password}
            />
            <input
              type="password"
              placeholder="Enter Your New Password"
              className="fromInput w-100 my-3"
              onChange={handleChange}
            />

            <button type="submit" className="btn-reset my-2">
              Reset password
            </button>

            <Link to="/login">
              <span>Login Now?</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
