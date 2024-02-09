import React, { useState } from "react";
import "./home.scss";
import image from "./images/pattern-divider-desktop.svg";
import genBtn from "./images/icon-dice.svg";

const Home = () => {
  const [advice, serAdvice] = useState(
    "“It is easy to sit up and take notice, what's difficult is getting up and taking action.”"
  );

  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE");
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlButtonClick = () => {
    console.log("click");
    fetchData();
  };
  return (
    <div className="app">
      <div className="main-app">
        <div className="advice-num">ADVICE #117</div>
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
