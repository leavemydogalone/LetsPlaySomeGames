import React, { useState } from "react";
import SpinBar from "../components/SpinBar";

export default function LevelThree() {
  const [start, setStart] = useState(false);
  const standInString = "kykldashiys";

  const handleWin = () => {
    console.log("you win");
  };

  const spinBars = standInString
    .split("")
    .map((letter: string, index: number) => (
      <SpinBar
        degrees={index * 30}
        letter={letter}
        key={index}
        handleWin={handleWin}
        delay={index * 300}
      />
    ));

  return (
    <div className="levelThree">
      <div className="flexContainer">
        {spinBars}
        <SpinBar degrees={330} handleWin={handleWin} delay={3300} />
      </div>
    </div>
  );
}
