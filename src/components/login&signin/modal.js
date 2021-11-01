import React from "react";
import Signin from "./signin";
import Login from "./login";
import "./modal.css";
import { LinkifyContext } from "../../context";
import { MdClose } from "react-icons/md";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  // console.log("modal working", isModalOpen, setIsModalOpen);
  const { isSignIn, isLogIn, signInToggler, logInToggler } =
    React.useContext(LinkifyContext);

  // console.log(isSignIn, isLogIn, signInToggler, logInToggler);
  return (
    <>
      {isModalOpen ? (
        <div className="modal-container-overlay">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
            onClick={() => setIsModalOpen(false)}
          ></div>
          <section className="modal-container">
            <div className="heading-container">
              <div
                className={
                  isSignIn ? "heading-component active" : "heading-component"
                }
                onClick={signInToggler}
              >
                Sign Up
              </div>
              <div
                className={
                  isLogIn ? "heading-component active" : "heading-component"
                }
                onClick={logInToggler}
              >
                Log in
              </div>
              <MdClose
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            {isLogIn && <Login />}
            {isSignIn && <Signin />}
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
