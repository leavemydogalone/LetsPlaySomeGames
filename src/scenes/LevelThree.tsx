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
            <span className="wow secondLine">THAT WAS AN EASY ONE</span>
            <span className="wow thirdLine">
              YOU HAVE WON FOR NOW... NEXT TIME WILL NOT BE SO EASY
            </span>
          </div>
        </div>
      )}
      <div className="textBox">
        <div className="inner firsty">Looks like its another key test...</div>
        <div className="inner secondy">Its going a little fast...</div>
        <div className="inner thirdy">Should I slow it down more...</div>
        <div className="inner fourthy">
          Okay but this is as slow as it goes...
        </div>
        <div className="inner fifthy">This is just getting embarassing...</div>
      </div>
    </div>
  );
}
