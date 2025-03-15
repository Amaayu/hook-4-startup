import React from "react";

import "./Singup.css";
import { Link, NavLink } from "react-router-dom";
const Singup = () => {
  return (
    <>
      <div className="sing">
        <img
          className="logo"
          src="https://res.cloudinary.com/dijzsv2tt/image/upload/v1713021728/Logo_xxgb0i.png"
          alt="Hook4StartUp"
        />
        <h2 id="mong">
          Hook4startup to help find the best partner for your startup growth
          journey.
        </h2>

        <form>
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
              type="email"
              id="email"
              name="email"
              placeholder="email"
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
            Make New Account
          </button>
          <div className="war ">
            <span>Already have an account ?</span>
            <NavLink to="/Login" className="log">
              Log in
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Singup;
