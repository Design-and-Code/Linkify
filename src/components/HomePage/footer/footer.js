import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import leftProp from './assets/left.svg';
import rightProp from './assets/right.svg';

export default function Footer() {
    return (
        <div className="footer">
        <div className="join-our-community">
            <img className="left-prop" src={leftProp} alt="left-prop" />
            <img className="right-prop" src={rightProp} alt="right-prop" />
            <h1>Join our Community</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
            officia duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia duis enim velit mollit.</p>
            <button className="join-button">Get Started</button>
        </div>
                
            <div className="footer-socials">
                <a href="#">Linkify</a>
                <div className="socials">
                    <div className="social-button"></div>
                    <div className="social-button"></div>
                    <div className="social-button"></div>
                    <div className="social-button"></div>
                    <div className="social-button"></div>
                </div>
            </div>
        </div>
    );
}