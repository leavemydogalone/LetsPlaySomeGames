import React from "react";
import Button from "../components/Button";

export default function MainMenu() {
  return (
    <div className="mainMenu">
      <h2 className="title">There is only one choice:</h2>
      <Button
        text="Play"
        handleClick={() => {
          return;
        }}
      />
    </div>
  );
}
