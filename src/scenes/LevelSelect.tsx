import React from "react";
import levelObjectsArray from "../data/levelObjects";

export default function LevelSelect() {
  return (
    <div className="levelSelect">
      {levelObjectsArray.map((levelObject) => (
        <div className="levelSelectorBox">{levelObject.text}</div>
      ))}
    </div>
  );
}
