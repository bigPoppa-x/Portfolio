import React from "react";
import Github from "../../assets/github-brands.svg";
import "./Home.scss";


const Home = () => {
  return (
    <div className="box-container">
      <div className="box">
        <div className="box__top">
          <div className="box__top--left">web</div>
          <div className="box__top--right">dev</div>
        </div>
        <div className="box__right">
          <div className="box__right--up">github</div>
          <div className="box__right--down">email</div>
        </div>
        <div className="box__bottom">see more about me</div>
        <div className="box__left">made by</div>
        <div>ante petkovic</div>
      </div>      
    </div>
  );
};

export default Home;
