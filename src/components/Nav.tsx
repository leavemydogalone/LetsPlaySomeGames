import React from "react";

type Props = {
  playerName: String;
};

export default function Nav({ playerName }: Props) {
  return (
    <nav className="nav">
      <h2>{playerName}</h2>
      <div className="bottom">
        <h1>LET'S PLAY SOME GAMES</h1>
      </div>
    </nav>
  );
}
