import React, { useState, useEffect } from "react";
import SpinBar from "../components/SpinBar";

export default function LevelThree() {
  const [start, setStart] = useState(false);
  const standInString = ["ky", "kl", "da", "sh", "iy", "s"];

  useEffect(() => {
    const startSpin = setTimeout(() => {
      setStart(true);
    }, 10000);
  }, []);

  const handleWin = () => {
    console.log("you win");
  };

  const spinBars = standInString.map((letter: string, index: number) => (
    <SpinBar
      degrees={index * 30}
      letter={letter}
      key={index}
      handleWin={handleWin}
      delay={index * 400}
    />
  ));

  return (
    <div className="levelThree">
      <div className="flexContainer">
        <div className="spinContainer">{spinBars}</div>
      </div>
    </div>
  );
}
