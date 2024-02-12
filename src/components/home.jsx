import React, { useState } from "react";
import "./home.scss";
import image from "./images/pattern-divider-desktop.svg";
import genBtn from "./images/icon-dice.svg";


const Home = () => {
  const [advice, serAdvice] = useState(
    "Click down green button to generate Advice"
  );

  const [adviceNum, setAdviceNum] = useState("----------")
 

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      // Check if 'slip' property exists in the response
      if (data.slip.advice) {
        serAdvice(data.slip.advice);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  const fetchAdviceById = async (slipId) => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/${slipId}`);
      const data = await response.json();

      if (data.slip.advice) {
        setAdviceNum(response);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error(`Error fetching advice by ID (${slipId}):`, error);
    }
  };
  

  const handlButtonClick = () => {
    console.log("click", );
    fetchData();
    fetchAdviceById();
    
  };
  return (
    <div className="app">
      <div className="main-app">
        <div className="advice-num">ADVICE #{adviceNum}</div>
        <div className="advice">{advice}</div>
        <div className="pattern-image">
          <img className="img" src={image} alt="" />
        </div>
        <button className="gen-btn" onClick={handlButtonClick}>
          <img src={genBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
