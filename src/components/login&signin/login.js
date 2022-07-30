import React from "react";
import "./signin.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section>
      <h3 className="signheading">Continue with your email</h3>
      <div className="form-container">
        <form>
          {/* email */}
          <label htmlFor="email" className="form-label form-fix">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="form-input form-fix"
          />

          <button className="signin-button">Login</button>
          <div className="line-container">
            <div className="line"></div>
            <span> Or </span>
            <div className="line"></div>
          </div>
          <div className="media-button">
            <FcGoogle className="media" />
            <div className="media-desc">Continue with your Google account</div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
