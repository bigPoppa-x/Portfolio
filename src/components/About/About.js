import React, {useState} from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aside">
        <h1>About</h1>        
      </div>
      <div className="grid-item info">
        <div className="info-title">
          <h2>About me</h2>
        </div>
        <div className="info-container">
          <div className="personal">
            <img id="my-pic" src={require("../../img/programmer.jpg")}/>
            <div className="location">
              <img src={require("../../assets/location.png")} />
              <span>Split, Croatia</span>
            </div>
            <p>
              Individual, little bit meticulous, sometimes whimsical.
              Interested in modern web technologies.
              1 year of experience and wont stop till its over, wont stop to surrender.              
            </p>
          </div>
          <div className="stack">
            <ul>
              <li>
                <img src={require("../../assets/HTML5.svg")}/>
                HTML5
              </li>
              <li>
                <img src={require("../../assets/CSS3.svg")}/>
                CSS3 / Sass
              </li>
              <li>
              <img src={require("../../assets/JavaScript.svg")}/>
                Javascript
              </li>
              <li>
                <img src={require("../../assets/React.svg")}/>
                React (Native)
              </li>
              <li>
              <img src={require("../../assets/NodeJS.svg")}/>
                Node</li>          
            </ul>
          </div>
        </div>
        
      </div>
      
      
      <div className="grid-item education">
        <h2>Education</h2>
      </div>
      <div className="grid-item experience">
      <h2>Experience</h2>
      </div>
      <div className="grid-item4 certifications">
      <h2>Certifications</h2>
      </div>

      
    </div>
  );
};

export default About;
