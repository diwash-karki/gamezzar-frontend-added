import React, { useState, ReactNode } from "react";
import '../Login/LoginStyle.css'
export default function LoginPage() {
  return (
    <>
      <section className="Login-Head">
        <h1>Login to Your Account</h1>
        <p>Choose from 130,000 game collections with new additions published every second month</p>
      </section>
      <div className="login-container">
        <form className="form-holder">
          <input type="text" className="input-box" placeholder="Enter Username" />
          <input type="password" className="input-box" placeholder="Enter Password" />
          <button type="submit" className="Login-btn">
            <label>Login into Your Account</label>
            <label>&#x2794;</label>
          </button>
        </form>
        <span style={{
          fontSize: "2.5rem"
        }}>
          /
        </span>
        <div style={{
          display: "flex",
          flexDirection: "column"

        }}>
          <a href="/signup">
            <button className="signup-btn">
              <label>Create new account?</label>
            </button>
          </a>

          <button className="forgot-btn">
            &nbsp;Forgot Password&nbsp;
          </button>
        </div>

      </div>
    </>
  );
}