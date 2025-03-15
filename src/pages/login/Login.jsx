import React from "react";

import "./Login.css";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login">
        <form className="form-1">
          <img
            className="logo-1"
            src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713021728/Logo_xxgb0i.png"
            alt="Hook4StartUp"
          />
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <button className="button-1" type="submit">
            Login
          </button>
          <div className="war ">
            <span>Don't have an account ?</span>
            <NavLink to="/feed" className="log">
              Sing Up
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
