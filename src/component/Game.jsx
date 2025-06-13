import React, { useState } from "react";
import Button from "./Button";
import style from "./game.module.css";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const diceImages = [one, two, three, four, five, six];

const Game = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const [message, setMessage] = useState("");

  const handleNumberClick = (value) => {
    setSelectedNumber(value);
  };

  const handleDiceRoll = () => {
    if (selectedNumber === null) {
      setMessage("Please select a number first.");
      return;
    }

    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);

    if (randomValue === selectedNumber) {
      setScore(score + randomValue);
      setMessage(`🎉 You guessed it right! +${randomValue} points`);
    } else {
      setScore(score - randomValue);
      setMessage(`❌ Wrong guess. -${randomValue} points`);
    }

    setSelectedNumber(null);
  };

  const handleReset = () => {
    setScore(0);
    setSelectedNumber(null);
    setMessage("");
    setDiceValue(1);
  };

  const handleRules = () => {
    alert(
      "🎲 Game Rules:\n\n1. Select a number from 1 to 6.\n2. Click on the dice to roll.\n3. If your selected number matches the dice roll, you get that many points.\n4. If not, that many points are deducted.\n5. Click 'Reset Score' to start over."
    );
  };

  return (
    <>
      <div className={style.score}>
        <div className={style.total_score}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className={style.number}>
          <div className={style.button}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Button
                key={num}
                text={num}
                value={num}
                onClick={() => handleNumberClick(num)}
                isActive={selectedNumber === num}
              />
            ))}
          </div>
          <p>
            {selectedNumber
              ? `You selected: ${selectedNumber}`
              : "Select Number"}
          </p>
        </div>
      </div>

      <div className={style.container}>
        <div
          className={style.image}
          onClick={handleDiceRoll}
          style={{ cursor: "pointer" }}
        >
          <img src={diceImages[diceValue - 1]} alt={`dice-${diceValue}`} />
          <p>Click on Dice to Roll</p>
          {message && (
            <p style={{ color: "#333", fontWeight: "600" }}>{message}</p>
          )}
        </div>
        <div className={style.button1}>
          <button className={style.btn1} onClick={handleReset}>
            Reset Score
          </button>
          <button className={style.btn1} onClick={handleRules}>
            Show Rules
          </button>
        </div>
        <button className={style.backButton} onClick={handleBack}>
          <IoMdArrowRoundBack />
          Back
        </button>
      </div>
    </>
  );
};

export default Game;
