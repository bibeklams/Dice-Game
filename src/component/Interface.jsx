import React from "react";
import style from "./interface.module.css";
import images from "../assets/dice.jpg";

import { useNavigate } from "react-router-dom";
const Interface = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };
  return (
    <div className={style.contain}>
      <div className={style.image}>
        <img src={images} alt="dice image" />
      </div>
      <div className={style.game}>
        <h1>DICE GAME</h1>
        <button onClick={handleClick}>Play Game</button>
      </div>
    </div>
  );
};

export default Interface;
