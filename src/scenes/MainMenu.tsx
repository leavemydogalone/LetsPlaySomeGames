import React from "react";
import Button from "../components/Button";
import { Scene } from "../ts/enums";

type Props = {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
};

export default function MainMenu({ setScene }: Props) {
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
