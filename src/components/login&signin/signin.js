import React from "react";
import "./signin.css";

const SignIn = () => {
  return (
    <section>
      <h3 className="signheading">Sign up</h3>
      <h4 className="example" style={{ textAlign: "center" }}>
        {" "}
        Using your email: example@example.com
      </h4>
      <div className="form-container">
        <form>
          {/* name  */}
          <label htmlFor="Name" className="form-label form-fix">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="name"
            placeholder="Enter your email"
            className="form-input form-fix"
          />

          {/* email */}
          <label htmlFor="password" className="form-label form-fix">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="form-input form-fix"
          />

          <button className="signin-button">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
