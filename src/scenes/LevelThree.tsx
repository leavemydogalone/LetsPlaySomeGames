import React, { useState, useEffect } from "react";
import SpinBar from "../components/SpinBar";
import { Speeds } from "../ts/enums";

export default function LevelThree() {
  const [classSpeedString, setClassSpeedString] = useState<Speeds>(Speeds.Stop);
  const [clickable, setClickable] = useState(false);
  const [won, setWon] = useState(false);

  const standInString = ["ky", "kl", "da", "sh", "iy", "s"];

  useEffect(() => {
    const startSpin = setTimeout(() => {
      setClickable(true);
      setClassSpeedString(Speeds.Fast);
    }, 6000);
    const startLessFastSpin = setTimeout(() => {
      setClassSpeedString(Speeds.LessFast);
    }, 12000);
    const startEvenLessFastSpin = setTimeout(() => {
      setClassSpeedString(Speeds.EvenLessFast);
    }, 15000);
    const startSlowSpin = setTimeout(() => {
      setClassSpeedString(Speeds.Slow);
    }, 18000);
    const stopSpin = setTimeout(() => {
      setClassSpeedString(Speeds.Stop);
    }, 22000);
  }, []);

  const handleWin = () => {
    setWon(true);
  };

  const spinBars = standInString.map((letters: string, index: number) => (
    <SpinBar
      degrees={index * 30}
      letters={letters}
      key={index}
      handleWin={handleWin}
      delay={index * 400}
      clickable={clickable}
    />
  ));

  return (
    <div className="levelThree">
      <div className="flexContainer">
        <div className={`spinContainer ${classSpeedString}`}>{spinBars}</div>
      </div>
      {won && (
        <div className="winScreen">
          <div className="diagonalBar">
            <span className="wow ">...........</span>
            <span className="wow secondLine">
              IT SEEMS YOU ARE GREATER THAN I COULD HAVE EVER IMAGINED
            </span>
            <span className="wow thirdLine">YOU HAVE WON... FOR NOW</span>
          </div>
        </div>
      )}
    </div>
  );
}
