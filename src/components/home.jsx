import React, { useState } from "react";
import "./home.scss";
import image from "./images/pattern-divider-desktop.svg";
import genBtn from "./images/icon-dice.svg";


const Home = () => {
  const [advice, serAdvice] = useState(
    "Click down button to generate Advice"
  );

  const [adviceNum, setAdviceNum] = useState("")
 

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice/');
      console.log(response)
      serAdvice("response");
      setAdviceNum("number")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlButtonClick = () => {
    console.log("click", );
    fetchData();
    
  };
  return (
    <div className="app">
      <div className="main-app">
        <div className="advice-num">ADVICE #{adviceNum}</div>
        <div className="advice">{advice}</div>
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

export default Home;
