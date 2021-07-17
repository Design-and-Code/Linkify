import React from "react";
import "./heroSection.css";
import backchange from "./assets/backchangepic.png";
import leftimg from "./assets/light-left.png";
import rightimg from "./assets/light-right.png";

export default function HeroSection(inputData) {
  return (
    <div className="heroSec">
      <div className="introSec">
        <h1 className="titleP">{inputData.titleP}</h1>
        <p className="about">{inputData.about}</p>
        <button className="start">{inputData.start}</button>
      </div>
      <div className="randomDesign">
        <img src={leftimg} alt="designleft" className="leftimg"></img>
        <img src={rightimg} alt="designright" className="rightimg"></img>
      </div>
      <div className="heroImgSec">
        <img src={backchange} alt="hero" className="lowerimg"></img>
      </div>
    </div>
  );
}
