import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="login-cont">
      <div className="login-form">
        <label className="login-label" htmlFor="email">
          Input Your Email
        </label>
        <input id="email" type="email" placeholder="example@mail.com" />
        <label className="login-label" htmlFor="password">
          Your Password
        </label>
        <input id="password" type="password" placeholder="******" />
        <button className="btn-login" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
