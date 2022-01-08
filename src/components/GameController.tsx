import React, { useState, useEffect } from "react";
import MainMenu from "../scenes/MainMenu";
import LevelSelect from "../scenes/LevelSelect";
import LevelOne from "../scenes/LevelOne";
import { Scene } from "../ts/enums";

type Props = {
  setBottomNavText: React.Dispatch<React.SetStateAction<String>>;
};

export default function GameController({ setBottomNavText }: Props) {
  const [scene, setScene] = useState<Scene>(Scene.One);
  const [sceneComponent, setSceneComponent] = useState(<LevelOne />);

  // updates state of sceneComponent with a new level/scene component
  // based on the scene that is set either through the main menu, level select,
  // or end of level button (to be added)
  useEffect(() => {
    function updateSceneComponent() {
      switch (scene) {
        case "Menu":
          setSceneComponent(<MainMenu setScene={setScene} />);

          break;
        case "LevelSelect":
          setSceneComponent(<LevelSelect />);
          break;
        case "One":
          setSceneComponent(<LevelOne />);
          break;
        default:
          break;
      }
    }
    updateSceneComponent();
  }, [scene]);

  return (
    <div className="gameController">
      <div className="gameContainer">{sceneComponent}</div>
    </div>
  );
}
