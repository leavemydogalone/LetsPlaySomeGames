import React, { useState } from "react";

import Nav from "./components/Nav";
import GameController from "./components/GameController";
import Footer from "./components/Footer";

export interface NameContextInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<String>>;
}

export const NameCtx = React.createContext<NameContextInterface | null>(null);

function App() {
  const [name, setName] = useState<String>("Anonymous");
  const NameContext: NameContextInterface = {
    name: "Anonymous",
    setName: setName,
  };

  const [bottomNavText, setBottomNavText] = useState<String>(
    "LET'S PLAY SOME GAMES"
  );

  return (
    <NameCtx.Provider value={NameContext}>
      <div className="App">
        <Nav playerName={name} bottomNavText={bottomNavText} />
        <GameController setBottomNavText={setBottomNavText} />
        <Footer />
      </div>
    </NameCtx.Provider>
  );
}

export default App;
