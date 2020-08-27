import React from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text"></input>
          <h5>Password</h5>
          <input type="password"></input>
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interested-Based
          Ads Notice
        </p>
        <button>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
