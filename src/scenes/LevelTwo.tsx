import React, { useState } from "react";

export default function LevelTwo() {
  const [offsetX, setOffsetX] = useState<number>(0);
  //   the left offset from parent div of the draggerContainer
  const [isDown, setIsDown] = useState(false);
  //   if the mouse is held down
  const [draggerPositionX, setDraggerPositionX] = useState<number>();
  //   The "left" postition of the draggerContainer
  const [won, setWon] = useState(false);

  function handleWin() {
    setWon(true);
  }

  const draggerContainer: HTMLElement | null =
    document.querySelector(".draggerContainer");

  return (
    <div
      className="levelTwo"
      onMouseUp={() => setIsDown(false)}
      onMouseLeave={() => setIsDown(false)}
      onMouseMoveCapture={(e) => {
        if (isDown) {
          setDraggerPositionX(offsetX + e.clientX);
          // if the mouse is down, will set the "left" position of the dragger,
          //   based on the offsetLeft of the draggerContainer when the mouse went down
          // plus the mouse position
          if (offsetX + e.clientX < 0) {
            setDraggerPositionX(0);
          }
          //   prevents the dragger from being dragged out of the left of the container
        }
      }}
    >
      <div className="top">
        <h2 className="title first">So you can spell...</h2>
        <h2 className="title second">For your second test...</h2>
        <h2 className="title third">Can You Find the key...</h2>
      </div>
      <div className="bottom">
        <div className="track">
          <div className="keyContainer" onClick={handleWin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
            </svg>
          </div>
          <div
            onMouseDown={(e) => {
              setIsDown(true);
              const nullChecker =
                draggerContainer !== null &&
                setOffsetX(draggerContainer.offsetLeft - e.clientX);
              // checks if the draggerContainer exists then will set the "left" offset
              // of the draggerContainer
            }}
            className="draggerContainer"
            style={{ left: draggerPositionX }}
          >
            <div className="dragger"></div>
          </div>
        </div>
      </div>
      {won && (
        <div className="winScreen">
          <div className="diagonalBar">
            <span className="wow">...........</span>
            <span className="wow secondLine">YOU HAVE BESTED ME AGAIN</span>
          </div>
        </div>
      )}
    </div>
  );
}
