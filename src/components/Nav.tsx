import React, { useContext } from "react";
import { NameCtx, NameContextInterface } from "../App";

type Props = {
  playerName: String;
  bottomNavText: String;
};

export default function Nav({ playerName, bottomNavText }: Props) {
  const nameContext = useContext(NameCtx);

  return (
    <nav className="nav">
      <div className="top">
        <h2 className="player">{playerName}</h2>
        <h2 className="score">0000</h2>
      </div>

      <div className="bottom">
        <h1>LET'S PLAY SOME GAMES</h1>
      </div>
    </nav>
  );
}
