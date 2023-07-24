import React, { useState, ReactNode } from "react";
import '../Signup/SignupStyle.css'
export default function SignupPage() {
    return (
        <>
            <section className="Login-Head">
                <h1>Create New Account</h1>
                <p>Choose from 130,000 game collections with new additions published every second month</p>
            </section>
            <div className="login-container">
                <form className="form-holder">
                    <input type="text" className="input-box" placeholder="Enter Fullname" required={true} />
                    <input type="text" className="input-box" placeholder="Enter Username" required={true} />
                    <input type="email" className="input-box" placeholder="Enter Email" required={true} />
                    <input type="password" className="input-box" placeholder="Enter Password" required={true} />
                    <input type="password" className="input-box" placeholder="Confirm Password" required={true} />
                    <button type="submit" className="Login-btn">
                        <label>Create New Account</label>
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
                    <a href="/login">
                        <button className="signup-btn">
                            <label>Login into Your Account</label>
                        </button>
                    </a>

                </div>

            </div>
        </>
    );
}