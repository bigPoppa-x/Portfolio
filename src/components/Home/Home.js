import React from "react";
import Github from "../../assets/github-brands.svg";
import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-logos">
        <img src={require("../../assets/linkedin.png")}/>
        <img src={require("../../assets/instagram.png")} />
        <img src={require("../../assets/Gmail.svg")} />
        <img src={require("../../assets/github-brands.svg")} className="white"/>
        
        {/* <i className="fab fa-github"></i> */}
      </div>
      <div className="home-spacer"></div>
      <div className="txt">
        <h1>Ante Petković</h1>
        <h3>Web Developer</h3>
        <div className="home-view-more">
          See more about me{" "}
          <span>
            <img src={require("../../assets/ArrowDown.png")} id="arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
