import React, { useContext } from "react";
import "./heroSection.css";
import heropic from "./assets/changepic.png";
import leftimgLight from "./assets/light-left.png";
import rightimgLight from "./assets/light-right.png";
import leftimgDark from "./assets/dark-left.png";
import rightimgDark from "./assets/dark-right.png";
import { LinkifyContext } from "../../../context";

export default function HeroSection(inputData) {
  const { theme } = useContext(LinkifyContext);

  return (
    <div className="heroSec">
      <img
        src={theme === "light-theme" ? leftimgLight : leftimgDark}
        alt="designleft"
        className="leftimg"
      ></img>
      <img
        src={theme === "light-theme" ? rightimgLight : rightimgDark}
        alt="designright"
        className="rightimg"
      ></img>
      <div className="introSec">
        <h1 className="titleP">{inputData.titleP}</h1>
        <p className="heroabout">{inputData.about}</p>
        <button className="hero-start">{inputData.start}</button>
      </div>
      <div className="heroImgSec">
        <img src={heropic} alt="hero" className="lowerimg"></img>
      </div>
    </div>
  );
}
