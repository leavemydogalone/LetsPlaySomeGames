import React, { useState, useEffect } from "react";
import MainMenu from "../scenes/MainMenu";
import LevelSelect from "../scenes/LevelSelect";
import { Scene } from "../ts/enums";

export default function GameController() {
  const [scene, setScene] = useState<Scene>(Scene.Menu);
  const [sceneComponent, setSceneComponent] = useState(
    <MainMenu setScene={setScene} />
  );

  useEffect(() => {
    function renderScene() {
      switch (scene) {
        case "Menu":
          setSceneComponent(<MainMenu setScene={setScene} />);
          break;
        case "LevelSelect":
          setSceneComponent(<LevelSelect />);
          break;
        default:
          break;
      }
    }
    renderScene();
  }, [scene]);

  return (
    <div className="gameController">
      <div className="gameContainer">{sceneComponent}</div>
    </div>
  );
}
