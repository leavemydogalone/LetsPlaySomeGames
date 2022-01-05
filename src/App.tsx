import React, { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import GameController from "./components/GameController";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState<String>("Anonymous");

  return (
    <div className="App">
      <Nav playerName={name} />
      <GameController />
      <Footer />
    </div>
  );
}

export default App;
