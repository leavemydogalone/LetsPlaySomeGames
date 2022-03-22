import React from "react";
import levelObjectsArray from "../data/levelObjects";

export default function LevelSelect() {
  // this may serve a purpose later on if their is a level select screen or bar
  return (
    <div className="levelSelect">
      {levelObjectsArray.map((levelObject) => (
        <div className="levelSelectorBox">{levelObject.text}</div>
      ))}
    </div>
  );
}
