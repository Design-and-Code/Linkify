import React from "react";
import "./signin.css";

const SignIn = () => {
  return (
    <section>
      <h3 className="signheading">Sign Up</h3>
      <div className="form-container">
        <h4 className="example"> Using example@gmail.com to sign up</h4>
        <form>
          {/* name  */}
          <label htmlFor="Name" className="form-label form-fix">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="   Name"
            className="form-input form-fix"
          />

          {/* email */}
          <label htmlFor="password" className="form-label form-fix">
            Your Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="   Password"
            className="form-input form-fix"
          />

          <button className="signin-button"> Sign Up </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
