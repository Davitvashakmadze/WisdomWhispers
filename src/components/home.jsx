import React from "react";
import "./home.scss";
import image from "./images/pattern-divider-desktop.svg"
import genBtn from "./images/icon-dice.svg"
const home = () => {
  const handlButtonClick = () => {
    console.log("click")
  }
  return (
    <div className="app">
      <div className="main-app">
        <div className="advice-num">ADVICE #117</div>
        <div className="advice">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </div>
        <div className="pattern-image">
          <img src={image} alt="" />
        </div>
        <button className="gen-btn" onClick={handlButtonClick}>
          <img src={genBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default home;
