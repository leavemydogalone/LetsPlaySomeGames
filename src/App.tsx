import React, { useState } from "react";

import Nav from "./components/Nav";
import GameController from "./components/GameController";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState<String>("Anonymous");
  const [bottomNavText, setBottomNavText] = useState<String>(
    "LET'S PLAY SOME GAMES"
  );

  return (
    <div className="App">
      <Nav playerName={name} bottomNavText={bottomNavText} />
      <GameController setBottomNavText={setBottomNavText} />
      <Footer />
    </div>
  );
}

export default App;
