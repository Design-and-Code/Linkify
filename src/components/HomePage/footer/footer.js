import React from "react";
import "./Footer.css";
import leftProp from "./assets/left.svg";
import rightProp from "./assets/right.svg";
import { LinkifyContext } from "../../../context";
import {
  FaDiscord,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const { theme } = React.useContext(LinkifyContext);
  // console.log(theme);

  return (
    <div className="footer">
      <div className="join-our-community">
        <img className="footer-left-prop" src={leftProp} alt="left-prop" />
        <img className="footer-right-prop" src={rightProp} alt="right-prop" />
        <h1>Join our Community</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia duis enim velit mollit. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia duis
          enim velit mollit.
        </p>
        <button className="join-button">Get Started</button>
      </div>

      <div className={"footer-socials"}>
        <div className="social-logo">
          <a className="social-logo" href="/">
            Linkify
          </a>
        </div>
        <div className="socials">
          <a
            href="https://discord.gg/druweDMn3s"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/Design-and-Code"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/designandcode/"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/DesignandCode3"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/designandcode.community/"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCd4E0oe8MtnZu_48WvYeLMw"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaYoutube />
          </a>
          <a
            href="https://designandcode.us/"
            target="_blank"
            rel="noreferrer"
            className={`social-button ${
              theme === "light-theme" ? "lightfont" : "darkfont"
            }`}
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
}
