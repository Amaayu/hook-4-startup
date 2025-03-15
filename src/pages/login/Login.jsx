import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userIsLoading, setUserIsLoading] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userIsLoading) {
      navigate("/feed");
    }
  }, [userIsLoading, navigate]); // ✅ Dependency array सही किया

  const mySubmitHandler = async (e) => {
    e.preventDefault();
    const data = { username, password };

    try {
      const response = await fetch(
        "https://hook4startup-bakend-java-dev.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Login successful!");
        setUserIsLoading(true);
        console.log("User is loading:", userIsLoading);

        navigate("/feed");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <form className="form-1" onSubmit={mySubmitHandler}>
        {" "}
        {/* ✅ onSubmit form पर लगाया */}
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
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-1" type="submit">
          Login
        </button>{" "}
        {/* ✅ onSubmit हटाकर सही किया */}
        <div className="war">
          <span>Don't have an account?</span>
          <NavLink to="/" className="log">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
