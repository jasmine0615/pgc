import React from "react";
import "./login.css";
const login = () => {
  return (
    <div className="main">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div className="selection-box">
        <select id="monitoring-select">
          <option value="">Select Option</option>
          <option value="scom">SCOM</option>
          <option value="azure">Azure Monitoring</option>
        </select>
      </div>
      <div className="loginbox">Login</div>

      <div className="frgt">
        <a href="#"> Forgot Password?</a>
      </div>
    </div>
  );
};

export default login;
