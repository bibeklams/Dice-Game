import React from "react";
import style from "./button.module.css";
const Button = ({ text, value, onClick, isActive }) => {
  return (
    <button
      className={`${style.button} ${isActive ? style.active : ""}`}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
};

export default Button;
