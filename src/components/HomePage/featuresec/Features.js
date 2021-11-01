import React from "react";
import phoneImg from "../../assets/phone.png";
import LinkIcon from "../../assets/link-icon.svg";
import propsLight from "../../assets/features-prop-light.svg";
import propsDark from "../../assets/features-prop-dark.svg";
import "./features.css";
import { LinkifyContext } from "../../../context";

const FeatureProp = ({ heading, description, styling }) => {
  return (
    <div className="feature-prop" style={styling}>
      <div className="features-prop-text">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="features-prop-image">
        <img src={LinkIcon} alt="link" />
      </div>
    </div>
  );
};

const Features = () => {
  const { theme } = React.useContext(LinkifyContext);

  return (
    <div className="features-section">
      <h1 className="features-header">Features</h1>
      <p className="features-about">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <div className="features-wrap">
        <div className="features-left-right">
          <FeatureProp
            heading="Feature 1"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia duis enim velit mollit."
            styling={{
              flexDirection: "row",
              textAlign: "right",
            }}
          />
          <FeatureProp
            heading="Feature 2"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia duis enim velit mollit."
            styling={{
              flexDirection: "row",
              textAlign: "right",
            }}
          />
        </div>
        <div className="features-center">
          <img src={phoneImg} alt="phone" />
        </div>
        <div className="features-left-right">
          <FeatureProp
            heading="Feature 3"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia duis enim velit mollit."
            styling={{
              flexDirection: "row-reverse",
              textAlign: "left",
            }}
          />
          <FeatureProp
            heading="Feature 4"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia duis enim velit mollit."
            styling={{
              flexDirection: "row-reverse",
              textAlign: "left",
            }}
          />
        </div>
      </div>
      <img
        className="features-random-prop features-random-left-1"
        src={theme === "light-theme" ? propsLight : propsDark}
        alt="Random props"
      />
      <img
        className="features-random-prop features-random-right"
        src={theme === "light-theme" ? propsLight : propsDark}
        alt="Random props"
        style={{
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
        }}
      />
      <img
        className="features-random-prop features-random-left-2"
        src={theme === "light-theme" ? propsLight : propsDark}
        alt="Random props"
      />
    </div>
  );
};

export default Features;
