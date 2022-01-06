import React, { useState } from "react";
import { JsxElement } from "typescript";
import MainMenu from "../scenes/MainMenu";
import { Scene } from "../ts/enums";

export default function GameController() {
  const [scene, setScene] = useState<Scene>(Scene.Menu);
  const [sceneComponent, setSceneComponent] = useState(<MainMenu />);

  function renderScene() {
    switch (scene) {
      case "Menu":
        setSceneComponent(<MainMenu />);
        break;

      default:
        break;
    }
  }

  return (
    <div className="gameController">
      <div className="gameContainer">{sceneComponent}</div>
    </div>
  );
}
