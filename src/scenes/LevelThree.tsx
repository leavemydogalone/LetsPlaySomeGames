import React, { useState } from "react";
import SpinBar from "../components/SpinBar";

export default function LevelThree() {
  const standInString = "kykldashiys";

  const spinBars = standInString
    .split("")
    .map((letter: string, index: number) => (
      <SpinBar degrees={index * 30} letter={letter} />
    ));

  return (
    <div className="levelThree">
      <div className="flexContainer">
        {spinBars}
        <SpinBar degrees={330} />
      </div>
    </div>
  );
}
